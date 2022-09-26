import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Career = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      flexDirection="column"
      mb="80px"
      alignItems="center"
      color={colorMode === "light" ? "black" : "white"}
    >
      <Flex
        flexDirection="column"
        w="100%"
        color={colorMode === "light" ? "white" : "gray.800"}
        mt="80px"
      >
        <HStack
          w="100%"
          h="64px"
          boxShadow="md"
          borderRadius="full"
          bg={colorMode === "light" ? "teal" : "teal.200"}
          alignItems="center"
          px="40px"
          spacing="40px"
        >
          <Text fontSize="20px" fontWeight="bold">
            2019/04 ~ 2023/03(予)
          </Text>
          <Text fontSize="20px" fontWeight="bold">
            デジタルハリウッド大学
          </Text>
        </HStack>
        <Icon
          as={BsThreeDotsVertical}
          w={16}
          h={16}
          color={colorMode === "light" ? "teal" : "teal.200"}
          alignSelf="center"
          my="8px"
        />
        <HStack
          w="100%"
          h="64px"
          boxShadow="md"
          borderRadius="full"
          bg={colorMode === "light" ? "teal" : "teal.200"}
          alignItems="center"
          px="40px"
          spacing="40px"
        >
          <Text fontSize="20px" fontWeight="bold">
            2020/10 ~ 2021/06
          </Text>
          <Text fontSize="20px" fontWeight="bold">
            株式会社Wemotion インターン
          </Text>
        </HStack>
        <Icon
          as={BsThreeDotsVertical}
          w={16}
          h={16}
          color={colorMode === "light" ? "teal" : "teal.200"}
          alignSelf="center"
          my="8px"
        />
        <HStack
          w="100%"
          h="64px"
          boxShadow="md"
          borderRadius="full"
          bg={colorMode === "light" ? "teal" : "teal.200"}
          alignItems="center"
          px="40px"
          spacing="40px"
        >
          <Text fontSize="20px" fontWeight="bold">
            2022/02 ~ 2022/05
          </Text>
          <Text fontSize="20px" fontWeight="bold">
            株式会社Philduct インターン
          </Text>
        </HStack>
        <Icon
          as={BsThreeDotsVertical}
          w={16}
          h={16}
          color={colorMode === "light" ? "teal" : "teal.200"}
          alignSelf="center"
          my="8px"
        />
        <HStack
          w="100%"
          h="64px"
          boxShadow="md"
          borderRadius="full"
          bg={colorMode === "light" ? "teal" : "teal.200"}
          alignItems="center"
          px="40px"
          spacing="40px"
        >
          <Text fontSize="20px" fontWeight="bold">
            2023/3 ~ 現在
          </Text>
          <Text fontSize="20px" fontWeight="bold">
            株式会社ミツモア インターン
          </Text>
        </HStack>
        <Icon
          as={BsThreeDotsVertical}
          w={16}
          h={16}
          color={colorMode === "light" ? "teal.200" : "teal"}
          alignSelf="center"
          my="8px"
        />
      </Flex>
    </Flex>
  );
};

export default Career;
