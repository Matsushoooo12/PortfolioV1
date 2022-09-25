import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper"; //使いたい機能をインポート
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const images = [
  "https://user-images.githubusercontent.com/66903388/192140812-2d333cf1-8d1d-4f55-b42b-de7f427bca29.png",
  "https://user-images.githubusercontent.com/66903388/192140834-0282d29f-43ee-44d3-97a2-8eaa528728e2.png",
  "https://user-images.githubusercontent.com/66903388/192140849-21876dee-1e82-4f99-a385-7d0670ff79a9.png",
  //   "/portfolio-v4.png",
  //   "/portfolio-v5.png",
];

const Works = () => {
  return (
    // <Flex w="1000px" h="100%" bg="green" alignItems="center">
    //   <Box fontWeight="bold" fontSize="24px" w="30%">
    //     <Text mb="16px">StaLog</Text>
    //     <Text mb="16px">えもメモリー</Text>
    //     <Text mb="16px">レトロリロン</Text>
    //     <Text mb="16px">The Creators</Text>
    //     <Text mb="16px">珊瑚のない世界</Text>
    //     <Text mb="16px">鳥籠の鳥</Text>
    //   </Box>
    //   <Box w="70%" h="100%" bg="red"></Box>
    // </Flex>
    // <Flex w="1000px" h="100%" bg="green" flexWrap="wrap" alignItems="center">
    //   <Box w="50%" h="300px"></Box>
    //   <Box w="50%" h="300px" bg="red"></Box>
    //   <Box w="50%" h="300px" bg="black"></Box>
    //   <Box w="50%" h="300px" bg="yellow"></Box>
    //   <Box w="50%" h="300px"></Box>
    //   <Box w="50%" h="300px" bg="red"></Box>
    // </Flex>
    <Flex w="1000px" flexWrap="wrap">
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192140834-0282d29f-43ee-44d3-97a2-8eaa528728e2.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192144987-2387ec2a-cf72-4234-8def-0338c5f83adc.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192140812-2d333cf1-8d1d-4f55-b42b-de7f427bca29.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192144918-da07a6ae-a1ef-4830-a998-7d97fab91a79.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192145055-ab6be8de-984f-4ced-aa3a-6df4e736cf8d.jpg"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192145298-6c5367e9-1f5e-433c-9521-9e624ec0ea5d.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
      <Flex
        w="300px"
        h="180px"
        mr="24px"
        mb="24px"
        borderRadius="xl"
        boxShadow="md"
        cursor="pointer"
        _hover={{ opacity: "0.8" }}
      >
        <Image
          src="https://user-images.githubusercontent.com/66903388/192145735-e912b9f4-1532-4640-974c-e6484846c287.png"
          alt=""
          fit="cover"
          w="100%"
          h="100%"
          borderRadius="xl"
        />
      </Flex>
    </Flex>
  );
};

export default Works;
