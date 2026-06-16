"use client";

import FavoritesPageBody from "@/components/favorites-page-body";
import { Box, Heading } from "@chakra-ui/react";

export default function FavoritesPage() {
  return (
    <Box p={8} maxW="900px" mx="auto">
      <Heading mb={4}>Favorites</Heading>
      <FavoritesPageBody />
    </Box>
  );
}
