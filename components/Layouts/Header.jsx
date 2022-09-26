import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { GoHome } from "react-icons/go";
import { FaSun } from "react-icons/fa";

const Header = ({ children }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log("colorMode", colorMode);
  return (
    <Center
      h={router.asPath === `/works/${router.query.id}` ? "100%" : "100vh"}
      position="relative"
      minWidth="1000px"
      // bg="black"
      // bg={bg}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        justifyContent="space-between"
        position="fixed"
        top="40px"
        w="95%"
        zIndex="1000"
        // bg={useColorModeValue("gray.100", "gray.900")}
      >
        <IconButton
          onClick={() => router.push("/")}
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<GoHome />}
          bg={router.asPath === "/" ? "teal.500" : "white"}
          color={router.asPath === "/" ? "white" : "teal"}
        />
        <HStack spacing="16px" color="teal" fontWeight="bold">
          <IconButton
            // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
            aria-label="DarkMode Switch"
            icon={colorMode === "light" ? <MoonIcon /> : <FaSun />} //自分の好みでSunアイコンはreact-iconsを使用しています
            onClick={toggleColorMode}
          />
          <Link
            textDecoration={
              router.asPath === "/about" ? "line-through" : "none"
            }
            color={router.asPath === "/about" ? "teal" : "teal.300"}
            onClick={() => router.push("/about")}
          >
            About
          </Link>
          <Link
            textDecoration={
              router.asPath === "/career" ? "line-through" : "none"
            }
            color={router.asPath === "/career" ? "teal" : "teal.300"}
            onClick={() => router.push("/career")}
          >
            Career
          </Link>
          <Link
            textDecoration={
              router.asPath === "/works" ? "line-through" : "none"
            }
            color={router.asPath === "/works" ? "teal" : "teal.300"}
            onClick={() => router.push("/works")}
          >
            Works
          </Link>
        </HStack>
      </Flex>
      {children}
    </Center>
  );
};

export default Header;
