import { Box, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { GoHome } from "react-icons/go";

const Header = () => {
  const router = useRouter();
  return (
    <Flex justifyContent="space-between" position="absolute" top="40px" w="95%">
      <IconButton
        onClick={() => router.push("/")}
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<GoHome />}
      />
      <HStack spacing="16px" color="teal" fontWeight="bold">
        <Link onClick={() => router.push("/about")}>About</Link>
        <Link onClick={() => router.push("/works")}>Works</Link>
      </HStack>
    </Flex>
  );
};

export default Header;
