"use client";

import { Flex, Link, Box, Heading, HStack, Spacer } from "@chakra-ui/react";
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
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      boxShadow="sm"
    >
      <Flex
        align="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={3}
      >
        <NextLink href="/" passHref legacyBehavior>
          <Link _hover={{ textDecoration: "none" }}>
            <Heading size="md">GitHub User Explorer</Heading>
          </Link>
        </NextLink>

        <Spacer />

        <HStack>
          <NextLink href="/" passHref legacyBehavior>
            <Link {...linkProps}>Home</Link>
          </NextLink>
          <NextLink href="/favorites" passHref legacyBehavior>
            <Link {...linkProps}>Favorites</Link>
          </NextLink>
        </HStack>
      </Flex>
    </Box>
  );
}
