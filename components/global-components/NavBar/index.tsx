"use client";

import {
  Flex,
  Link as ChakraLink,
  Box,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";

export function NavBar() {
  const linkProps = {
    color: "white",
    fontWeight: "bold",
    _hover: { color: "blue.300" },
  };
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      bg="grey"
    >
      <Flex
        align="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={3}
      >
        <ChakraLink asChild _hover={{ textDecoration: "none" }}>
          <NextLink href="/">
            <Heading size="md">GitHub User Explorer</Heading>
          </NextLink>
        </ChakraLink>

        <Spacer />

        <HStack>
          <ChakraLink asChild {...linkProps}>
            <NextLink href="/">Home</NextLink>
          </ChakraLink>
          <ChakraLink asChild {...linkProps}>
            <NextLink href="/favorites">Favorites</NextLink>
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
}
