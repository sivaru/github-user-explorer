import { useInfiniteQuery } from "@tanstack/react-query";

import API_ROUTES from "@/constants/ApiRoutes";
import type { GitHubSearchUsersResponse } from "@/types/github";

export function useSearchUser(userName: string) {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  return useInfiniteQuery<GitHubSearchUsersResponse>({
    queryKey: ["search-user", userName],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `${API_ROUTES.BASE_URL}${API_ROUTES.SEARCH_USERS}?q=${encodeURIComponent(
          userName,
        )}&page=${pageParam}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
    getNextPageParam: (lastPage, allPages) => {
      // GitHub API returns items, we can check if we got less than expected to know if there's more
      // Or check the response headers for link info
      const hasMore = lastPage.items && lastPage.items.length > 0;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    enabled: !!userName,
  });
}
