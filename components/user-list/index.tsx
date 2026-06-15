import { useSearchUser } from "@/hooks/useSearchUser";
import type { GitHubUser } from "@/types/github";
import { UserCard } from "./UserCard";
import { Grid } from "@chakra-ui/react";

const UserList = ({ userName }: { userName: string }) => {
  const { data, isLoading, error } = useSearchUser(userName);

  if (!userName) {
    return null;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = data?.items ?? [];
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={6} p={4}>
      {items.length > 0 ? (
        items.map((user: GitHubUser) => (
          <UserCard
            key={user.id}
            avatarUrl={user.avatar_url}
            login={user.login}
            id={user.id}
            type={user.type}
            userViewType={user.user_view_type}
          />
        ))
      ) : (
        <div>No users found.</div>
      )}
    </Grid>
  );
};

export default UserList;
