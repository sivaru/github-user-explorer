"use client";

import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <Heading>Welcome to Chakra UI</Heading>
      <Button colorScheme="blue" mt={4}>
        Click me
      </Button>
    </Box>
  );
}
