import { useState, useEffect } from "react";
import { GitHubUser } from "@/types/github";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<GitHubUser[]>([]);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(
      window.localStorage.getItem("favorites") ?? "[]",
    );
    setFavorites(storedFavorites);
  }, []);

  const saveFavorite = (user: GitHubUser) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === user.id);
      if (!isAlreadyFavorite) {
        const updated = [...prev, user];
        window.localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  const removeFavorite = (userId: number) => {
    setFavorites((prev) => {
      const updated = prev.filter((fav) => fav.id !== userId);
      window.localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (userId: number) => {
    return favorites.some((fav) => fav.id === userId);
  };

  return { favorites, isFavorite, saveFavorite, removeFavorite };
};
