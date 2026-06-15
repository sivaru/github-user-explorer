import { useRef, useEffect } from "react";
import { Box, VStack, Text, Spinner, Button } from "@chakra-ui/react";
import { useSearchUser } from "@/hooks/useSearchUser";
import UserCard from "./UserCard";

interface UserSearchResultsProps {
  searchQuery: string;
}

export const UserList: React.FC<UserSearchResultsProps> = ({
  searchQuery,
}: UserSearchResultsProps) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useSearchUser(searchQuery);

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerTarget.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={8}>
        <Spinner />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box p={4} textAlign="center">
        <Text color="red.500">Error: {(error as Error).message}</Text>
      </Box>
    );
  }

  const allUsers = data?.pages.flatMap((page) => page.items) || [];

  return (
    <VStack gap={6} align="stretch">
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap={4}
        mt={4}
      >
        {allUsers.map((user) => (
          <UserCard
            key={user.id}
            avatarUrl={user.avatar_url}
            login={user.login}
            id={user.id}
            type={user.type}
            userViewType={user.user_view_type}
          />
        ))}
      </Box>

      {/* Infinite scroll trigger point */}
      <Box ref={observerTarget} py={8} textAlign="center">
        {isFetchingNextPage ? (
          <Spinner />
        ) : hasNextPage ? (
          <Text color="gray.500">Scroll for more...</Text>
        ) : (
          <Text color="gray.500">No more users</Text>
        )}
      </Box>
    </VStack>
  );
};

export default UserList;
