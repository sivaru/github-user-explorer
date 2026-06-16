import { useFavorites } from "@/hooks/useFavorites";
import UserCard from "../user-list/UserCard";
import { Box, VStack } from "@chakra-ui/react";

const FavoritesPageBody = () => {
  const { favorites, isFavorite, saveFavorite, removeFavorite } =
    useFavorites();

  return (
    <VStack gap={6} align="stretch">
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap={4}
        mt={4}
      >
        {favorites.map((user) => (
          <UserCard
            key={user.id}
            avatarUrl={user.avatar_url}
            login={user.login}
            id={user.id}
            type={user.type}
            userViewType={user.user_view_type}
            isFavorite={isFavorite(user.id)}
            saveFavorite={() => saveFavorite(user)}
            removeFavorite={() => removeFavorite(user.id)}
          />
        ))}
        {favorites.length === 0 && (
          <Box textAlign="center" mt={8} color="gray.500">
            You have no favorite users yet. Start adding some!
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default FavoritesPageBody;
