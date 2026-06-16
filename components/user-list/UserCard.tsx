import { Box, Image, VStack, HStack, Button, Text } from "@chakra-ui/react";

interface GitHubUserCardProps {
  avatarUrl: string;
  login: string;
  id: number;
  type: string;
  userViewType?: string;
  isFavorite: boolean;
  saveFavorite?: () => void;
  removeFavorite?: () => void;
}

const UserCard: React.FC<GitHubUserCardProps> = ({
  avatarUrl,
  login,
  id,
  type,
  userViewType,
  isFavorite = false,
  saveFavorite,
  removeFavorite,
}) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      maxW="320px"
      boxShadow="sm"
    >
      <VStack gap={4}>
        <Image
          src={avatarUrl}
          alt={login}
          w="80px"
          h="80px"
          borderRadius="full"
          border="2px solid"
          borderColor="gray.200"
        />
        <VStack gap={1} textAlign="center">
          <Text fontSize="lg" fontWeight="500">
            {login}
          </Text>
          <Text fontSize="sm" color="gray.500">
            User ID: {id}
          </Text>
        </VStack>
      </VStack>

      <Box borderTop="1px solid" borderColor="gray.200" my={5} />

      <HStack gap={3} mb={4}>
        <Box flex={1} bg="gray.50" p={3} borderRadius="md">
          <Text fontSize="xs" color="gray.600" mb={1}>
            Type
          </Text>
          <Text fontSize="sm" fontWeight="500">
            {type}
          </Text>
        </Box>
        <Box flex={1} bg="gray.50" p={3} borderRadius="md">
          <Text fontSize="xs" color="gray.600" mb={1}>
            Visibility
          </Text>
          <Text fontSize="sm" fontWeight="500">
            {userViewType}
          </Text>
        </Box>
      </HStack>
      <Button
        w="full"
        variant="outline"
        size="sm"
        onClick={() => window.open(`https://github.com/${login}`, "_blank")}
      >
        View Profile →
      </Button>
      <Button
        mt={2}
        w="full"
        variant="outline"
        size="sm"
        onClick={() => (isFavorite ? removeFavorite?.() : saveFavorite?.())}
      >
        {isFavorite ? "Remove from Favorites " : "Add to Favorites ♥"}
      </Button>
    </Box>
  );
};

export default UserCard;
