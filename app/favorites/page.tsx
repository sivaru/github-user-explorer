"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function FavoritesPage() {
  return (
    <Box p={8} maxW="900px" mx="auto">
      <Heading mb={4}>Favorites</Heading>
      <Text>This page will show your favorite users once you add them.</Text>
    </Box>
  );
}
