import { useQuery } from "@tanstack/react-query";

import API_ROUTES from "@/constants/ApiRoutes";
import type { GitHubSearchUsersResponse } from "@/types/github";

export function useSearchUser(userName: string, page: number = 1) {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  return useQuery<GitHubSearchUsersResponse>({
    queryKey: ["search-user", userName, page],
    queryFn: async () => {
      const response = await fetch(
        `${API_ROUTES.BASE_URL}${API_ROUTES.SEARCH_USERS}?q=${encodeURIComponent(
          userName,
        )}&page=${page}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
  });
}
