import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Tooltip,
  Link,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper"; //使いたい機能をインポート
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { useState } from "react";
import { SiWebmoney } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const contents = [
  {
    id: 1,
    src: "https://user-images.githubusercontent.com/66903388/192140834-0282d29f-43ee-44d3-97a2-8eaa528728e2.png",
    title: "The Creators",
    summary:
      "0から何かものづくりをしたいクリエイター同士で繋がり、協力して頭の中に描いたものを実現することのできるサービス。",
  },
  {
    id: 2,
    src: "https://user-images.githubusercontent.com/66903388/192144987-2387ec2a-cf72-4234-8def-0338c5f83adc.png",
    title: "えもメモリー",
    summary:
      "喜怒哀楽の感情をイメージした色とキャラクターを使って感情ベースで投稿ができ、それを見返すことで自分が普段どんな感情を持って生活しているのかを分析できる。",
  },
  {
    id: 3,
    src: "https://user-images.githubusercontent.com/66903388/192140812-2d333cf1-8d1d-4f55-b42b-de7f427bca29.png",
    title: "Rails API + React(TypeScript)で簡易的な SNS アプリ を作る",
    summary:
      "Ruby on Rails（Backend）とTypeScriptを使ったReact（フロントエンド）で簡易的なSNSアプリを作るチュートリアル。どのあぷりにもある様々な機能の基本的な作り方を発信して自分が次に作る時のテンプレートとしても便利なアプリを作った。",
  },
  {
    id: 4,
    src: "https://user-images.githubusercontent.com/66903388/192144918-da07a6ae-a1ef-4830-a998-7d97fab91a79.png",
    title: "レトロリロン　オフィシャルサイト",
    summary:
      "レトロリロンのメンバーであった旧友から Web サイト作成を頼まれたため作成。リッチな画面遷移を実現するため SPA アプリを作成。",
    siteUrl: "https://retroriron.com",
    githubUrl: "https://github.com/Matsushoooo12/Retroriron-Frontend",
  },
  {
    id: 5,
    src: "https://user-images.githubusercontent.com/66903388/192145055-ab6be8de-984f-4ced-aa3a-6df4e736cf8d.jpg",
    title: "珊瑚のない世界",
    summary:
      "珊瑚の重要性や保全理由、現状を絵日記にして伝え、企業、個人それぞれが取り組めることを提示したWebサイトのプロトタイプ",
  },
  {
    id: 6,
    src: "https://user-images.githubusercontent.com/66903388/192145735-e912b9f4-1532-4640-974c-e6484846c287.png",
    title: "StaLog",
    summary:
      "「コロナ期間の自己成長」。大学生である私の視点から、コロナ期間の孤独に打ち勝ち、大学に行けない間に同級生と差をつけるためのアプリを作りました。",
  },
];

const Works = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  console.log("id", id);
  return (
    <>
      <Flex>
        <VStack alignItems="flex-start" mr="56px" color="teal">
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(1)}
            color={id === 1 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/1`)}
          >
            The Creators
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(2)}
            color={id === 2 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/2`)}
          >
            えもメモリー
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(3)}
            color={id === 3 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/3`)}
          >
            React Tutorial
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(4)}
            color={id === 4 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/4`)}
          >
            レトロリロン
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(5)}
            color={id === 5 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/5`)}
          >
            珊瑚のない世界
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            cursor="pointer"
            onMouseOver={() => setId(6)}
            color={id === 6 ? "teal.500" : "gray.400"}
            onClick={() => router.push(`/works/6`)}
          >
            StaLog
          </Text>
        </VStack>
        <Flex w="1000px" flexWrap="wrap">
          {contents?.map((content) => (
            <Flex
              key={content.id}
              w="300px"
              h="180px"
              mr="24px"
              mb="24px"
              borderRadius="xl"
              boxShadow="md"
              cursor="pointer"
              _hover={{ opacity: "0.8" }}
              onClick={() => router.push(`/works/${content.id}`)}
              position="relative"
              onMouseOver={() => setId(content.id)}
            >
              <Box
                w="100%"
                h="100%"
                bg="teal.500"
                opacity="0.5"
                position="absolute"
                top="0"
                bottom="0"
                right="0"
                left="0"
                margin="auto"
                borderRadius="xl"
                display={id === content.id ? "block" : "none"}
              ></Box>
              <Tooltip hasArrow label={content.title} bg="teal" color="white">
                <Image
                  src={content.src}
                  alt={content.src}
                  fit="cover"
                  w="100%"
                  h="100%"
                  borderRadius="xl"
                />
              </Tooltip>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Works;
