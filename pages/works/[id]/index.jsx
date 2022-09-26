import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const DetailWork = () => {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [value, setValue] = useState({});
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("router", router.query.id);
  return (
    <Flex flexDirection="column" w="1000px" h="100%" my="100px">
      {router.query.id === "1" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            The Creators
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192140834-0282d29f-43ee-44d3-97a2-8eaa528728e2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173340-b1b8df04-1c5f-40fb-a098-2f77ce0adab8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173456-51a3c19d-8879-4a3c-adf5-4867c69feb09.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173838-0c52f7cc-e9bc-4118-9936-587c26d7102f.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173937-74f9f16d-85ed-48c8-9187-2f3dbbd25268.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174043-923fd2ef-185a-41f9-af85-1705fb9a11c7.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174217-8e2c45ef-0047-4201-9cf6-4be775492f0e.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174331-fb55d3a0-8c05-496a-9693-dfa8ded77102.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174501-96d95f6b-55b7-46c6-9cd7-c94520cad2a0.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174548-dedefa4f-abe3-4b15-a4b0-5366de8c53b2.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192140834-0282d29f-43ee-44d3-97a2-8eaa528728e2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173340-b1b8df04-1c5f-40fb-a098-2f77ce0adab8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173456-51a3c19d-8879-4a3c-adf5-4867c69feb09.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173838-0c52f7cc-e9bc-4118-9936-587c26d7102f.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192173937-74f9f16d-85ed-48c8-9187-2f3dbbd25268.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174043-923fd2ef-185a-41f9-af85-1705fb9a11c7.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174217-8e2c45ef-0047-4201-9cf6-4be775492f0e.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174331-fb55d3a0-8c05-496a-9693-dfa8ded77102.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174501-96d95f6b-55b7-46c6-9cd7-c94520cad2a0.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192174548-dedefa4f-abe3-4b15-a4b0-5366de8c53b2.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>
                0から何かものづくりをしたいクリエイター同士で繋がり、協力して頭の中に描いたものを実現することのできるサービス。
              </ListItem>
              <ListItem>
                誰かが作ったプロジェクトに人が集まり一緒にものづくりをして完成した作品を投稿することができる。
              </ListItem>
              <ListItem>
                ものづくりを構想段階から作った後までをサポートして、より気軽に個人規模でのものづくりを実現しやすくすることにより、「職業ものづくり」を増やしていきたい。
              </ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              フロントエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>React</ListItem>
              <ListItem>NextJS</ListItem>
              <ListItem>Chakra UI</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              バックエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Firebase Authentication</ListItem>
              <ListItem>Cloud FireStore</ListItem>
              <ListItem>Cloud Storage</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              インフラ
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Vercel</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              目的
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" mb="16px">
              本多ゼミの展示会に出展する目的で作成
            </Text>
            <Image
              src="https://user-images.githubusercontent.com/66903388/192182523-7d1e1c74-8eff-4c11-98b4-559effe51c75.jpg"
              alt=""
              w="30%"
              mb="16px"
            />
            <Text>企画約1ヶ月、開発約2ヶ月で完成しました。</Text>
            <Text mb="16px">
              来場したデジハリの学生たちには好評で、何人もに使ってみたいと言ってもらうことができました。
            </Text>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">作品説明</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://locrian-learning-8e6.notion.site/afb6d6236d2742c1bb44df592a3adade"
              isExternal
            >
              https://locrian-learning-8e6.notion.site/afb6d6236d2742c1bb44df592a3adade
            </Link>
            <Text fontWeight="bold">Githubリポジトリ</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://github.com/Matsushoooo12/TheCreators"
              isExternal
            >
              https://github.com/Matsushoooo12/TheCreators
            </Link>
            <Text fontWeight="bold">WebサイトURL</Text>
            <Text mb="16px">
              ※データベースの期限の問題で現在ダミーデータが入っていません。休止中です。
            </Text>
            <Link
              mb="16px"
              color="teal"
              href="https://the-creators-zeta.vercel.app/"
              isExternal
            >
              https://the-creators-zeta.vercel.app/
            </Link>
          </Box>
        </Box>
      )}
      {router.query.id === "2" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            えもメモリー
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188399-298747ce-06e8-43d8-bdfd-1519dedc4c03.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188390-056c7ecb-6150-499f-881a-8bd9fa9cf764.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188395-61eb65a5-43bb-4d54-bee2-dafb60e974b1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188397-b6647c5f-22de-46ce-ae14-ca2165350118.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188402-43314b37-c26d-405d-9a70-40fbc6135525.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188404-1be6a4de-059f-4f03-bac9-29489c21d068.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188407-996666e6-5ae4-4bef-855f-f201011c20af.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188410-9c873188-5704-4026-870f-a4712b310c3c.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188411-4d971c90-9739-422f-ad42-0ecd2467150c.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188399-298747ce-06e8-43d8-bdfd-1519dedc4c03.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188390-056c7ecb-6150-499f-881a-8bd9fa9cf764.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188395-61eb65a5-43bb-4d54-bee2-dafb60e974b1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188397-b6647c5f-22de-46ce-ae14-ca2165350118.png"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188402-43314b37-c26d-405d-9a70-40fbc6135525.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188404-1be6a4de-059f-4f03-bac9-29489c21d068.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188407-996666e6-5ae4-4bef-855f-f201011c20af.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188410-9c873188-5704-4026-870f-a4712b310c3c.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192188411-4d971c90-9739-422f-ad42-0ecd2467150c.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <Text fontWeight="bold" mb="16px">
              感情ベースで思ったことを呟けるメモアプリ。
            </Text>
            <Text mb="16px">
              <Tag variant="outline" p={1}>
                喜怒哀楽
              </Tag>
              の感情をイメージした色とキャラクターを使って感情ベースで投稿ができ、それを見返すことで自分が普段どんな感情を持って生活しているのかを分析できる。
            </Text>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              フロントエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>React</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Chakra UI</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              バックエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>PostgreSQL</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              インフラ
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Heroku</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              目的
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" mb="16px">
              SPAアプリの仕組みを理解するために作成。
            </Text>
            <Text>
              バックエンドで使っているRuby on
              RailsはAPI開発のためだけに主に使い、そのデータをフロントエンドで受け取ってデータを表示している。
            </Text>
            <Text mb="16px">
              モダンなWebアプリ開発の仕組みを理解するために開発。
            </Text>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              データベース設計
            </Heading>
            <Image
              src="https://user-images.githubusercontent.com/66903388/192190019-fa096723-9ba5-400c-a3ab-2ced52d1b9e4.png"
              alt=""
              w="50%"
              mb="16px"
            />
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">Githubリポジトリ</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://github.com/Matsushoooo12/EmoMemory-Frontend"
              isExternal
            >
              https://github.com/Matsushoooo12/EmoMemory-Frontend
            </Link>
            <Text fontWeight="bold">WebサイトURL</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://glistening-figolla-f13bc0.netlify.app/"
              isExternal
            >
              https://glistening-figolla-f13bc0.netlify.app/
            </Link>
          </Box>
        </Box>
      )}
      {router.query.id === "3" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            Rails API + React(TypeScript)で簡易的な SNS アプリ を作る
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192501-833c3c16-5a1b-4b7f-ae5c-b4277e39db03.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192497-76054e03-c272-4697-b24a-ca122f6e9903.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192498-0beb84b7-3d95-4567-80cf-84f8804fe7c4.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192500-fb1e45f9-737a-4035-9a48-6340aac13dba.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192503-5cbbc19a-be43-43c4-ae27-9dd4e0a2628d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192506-e23d9cc5-8554-44cc-8dba-0fff5b1b3505.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192509-abd2ef71-3dec-4f2c-a7d4-55480810b40b.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192512-eb631ca0-5c5e-4811-9df7-e3e5459f4945.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192513-04e74f01-1af2-4d00-85a6-d78b0972b438.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192515-038af902-a321-4a7d-b632-271605d5b0a3.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192516-157075ed-521c-4852-bdf7-74f777043887.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192501-833c3c16-5a1b-4b7f-ae5c-b4277e39db03.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192497-76054e03-c272-4697-b24a-ca122f6e9903.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192498-0beb84b7-3d95-4567-80cf-84f8804fe7c4.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192500-fb1e45f9-737a-4035-9a48-6340aac13dba.png"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192503-5cbbc19a-be43-43c4-ae27-9dd4e0a2628d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192506-e23d9cc5-8554-44cc-8dba-0fff5b1b3505.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192509-abd2ef71-3dec-4f2c-a7d4-55480810b40b.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192512-eb631ca0-5c5e-4811-9df7-e3e5459f4945.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192513-04e74f01-1af2-4d00-85a6-d78b0972b438.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192515-038af902-a321-4a7d-b632-271605d5b0a3.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192192516-157075ed-521c-4852-bdf7-74f777043887.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <Text mb="16px">
              ほとんどのアプリに必要な基本機能を集めたアプリを作り、実装方法を記述してZennというエンジニアの知識共有サービスで発信しました。
            </Text>
            <Text mb="16px">
              このアプリを作ることで、他のアプリを実装する時に機能実装で調べる手間を省くことを目的に作成。
            </Text>
            <Text fontWeight="bold" mb="16px" fontSize="xl">
              実装機能
            </Text>
            <UnorderedList mb="16px">
              <ListItem>投稿機能</ListItem>
              <ListItem>ログイン機能</ListItem>
              <ListItem>フォロー機能</ListItem>
              <ListItem>DM機能</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              フロントエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>React</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Chakra UI</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              バックエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>PostgreSQL</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              インフラ
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Heroku</ListItem>
            </UnorderedList>
            <Text>
              バックエンドで使っているRuby on
              RailsはAPI開発のためだけに主に使い、そのデータをフロントエンドで受け取ってデータを表示している。
            </Text>
            <Text mb="16px">
              モダンなWebアプリ開発の仕組みを理解するために開発。
            </Text>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              データベース設計
            </Heading>
            <Image
              src="https://user-images.githubusercontent.com/66903388/192192518-5b86e57b-1980-471c-a39d-60d3d60b4a0b.png"
              alt=""
              w="70%"
              mb="16px"
            />
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">Githubリポジトリ</Text>
            <Text>※このリポジトリのREADME部分に実装方法を記述</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://github.com/Matsushoooo12/RailsAPI-React-TypeScript-SNS"
              isExternal
            >
              https://github.com/Matsushoooo12/RailsAPI-React-TypeScript-SNS
            </Link>
          </Box>
        </Box>
      )}
      {router.query.id === "4" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            レトロリロン/OFFICIAL SITE
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196607-d0fe9f94-45a4-4b6b-8832-4eb48f829cf1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196628-5ec00941-3d15-4404-ac2d-2e0316173f15.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196632-4976a4df-766a-4e56-b16a-8a5bd0d2c6a8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196635-36769413-b538-4896-a4eb-7e356043d33b.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196640-a52ff444-065e-417d-acc7-0eeb33448f44.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196646-037b7e4e-a08f-4d73-971b-4593eeb17cb8.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196607-d0fe9f94-45a4-4b6b-8832-4eb48f829cf1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196628-5ec00941-3d15-4404-ac2d-2e0316173f15.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196632-4976a4df-766a-4e56-b16a-8a5bd0d2c6a8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196635-36769413-b538-4896-a4eb-7e356043d33b.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196640-a52ff444-065e-417d-acc7-0eeb33448f44.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192196646-037b7e4e-a08f-4d73-971b-4593eeb17cb8.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>
                レトロリロンのメンバーであった旧友から Web
                サイト作成を頼まれたため作成。
              </ListItem>
              <ListItem>
                リッチな画面遷移を実現するため SPA アプリを作成。
              </ListItem>
              <ListItem>
                デザイナーの友人と協力して約1ヶ月で初期リリース版のプロダクトを開発しました。
              </ListItem>
              <ListItem>
                現在はバンドメンバーとコミュニケーションを取りながら、地道に改善しながらサイト運営を行っています。
              </ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              フロントエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>React</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              バックエンド
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Ruby on Rails</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              インフラ
            </Text>
            <UnorderedList mb="16px">
              <ListItem>Heroku</ListItem>
            </UnorderedList>
            <Text fontSize="2xl" fontWeight="bold">
              画像アップロード
            </Text>
            <UnorderedList mb="16px">
              <ListItem>AWS</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              運営
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" mb="16px">
              サイト運営約半月でSEO対策を行いランキング上位に載せることに成功。
            </Text>
            <Text mb="16px">
              また、現在約3ヶ月でページに来る人も順調に増えてきました。一番表示数の多かった8月21日には一日の表示回数341回を記録しました。
            </Text>
            <Image
              src="https://user-images.githubusercontent.com/66903388/192196653-069ed542-9015-45db-ae8c-f671d1c5b6ff.png"
              alt=""
              w="50%"
              mb="16px"
            />
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">Githubリポジトリ</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://github.com/Matsushoooo12/Retroriron-Frontend"
              isExternal
            >
              https://github.com/Matsushoooo12/Retroriron-Frontend
            </Link>
            <Text fontWeight="bold">WebサイトURL</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://retroriron.com/"
              isExternal
            >
              https://retroriron.com/
            </Link>
          </Box>
        </Box>
      )}
      {router.query.id === "5" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            珊瑚のない世界
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper5"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199099-bdc217d7-5cd4-4c10-99c9-d56c02b0183d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199109-3f6312ee-db73-479a-b11a-e063d8daa4d1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199114-890a6af7-5870-4002-9dad-0a0b71ed208a.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199117-b58c68e4-dbae-438f-a5e4-643f380fd7ea.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199122-ade17e41-3efb-474a-8264-dcf894fc9225.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199123-0684c121-d84e-4995-a08d-454ea654b6e8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199128-8ff477cc-67a2-4829-8933-d65143ae2e05.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199099-bdc217d7-5cd4-4c10-99c9-d56c02b0183d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199109-3f6312ee-db73-479a-b11a-e063d8daa4d1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199114-890a6af7-5870-4002-9dad-0a0b71ed208a.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199117-b58c68e4-dbae-438f-a5e4-643f380fd7ea.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199122-ade17e41-3efb-474a-8264-dcf894fc9225.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199123-0684c121-d84e-4995-a08d-454ea654b6e8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192199128-8ff477cc-67a2-4829-8933-d65143ae2e05.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>
                Adobeが開催した、社会問題解決に挑むAdobe
                XDを使ったデザインコンペ「College Creative Jam」の提出作品
              </ListItem>
              <ListItem>
                日本サンゴ礁学会の方々にたくさんお話を聞かせてもらったり、デジハリの多くの先生に協力していただきながら作成しました。
              </ListItem>
              <ListItem>コンセプトは「未来日記から学ぶ環境保全」</ListItem>
              <ListItem>
                珊瑚の重要性や保全理由、現状を絵日記を通して伝え、企業、個人それぞれが取り組めることを提示したWebサイトです。
              </ListItem>
              <ListItem>
                珊瑚の重要性や保全理由を知ってもらうために、「珊瑚のない世界」という絵日記でアプローチしました。
              </ListItem>
              <ListItem>
                実際にサンゴ礁がなくなっていく過程を一人の男性の支店で見せることで、珊瑚の必要性を身近に感じ、危機感を抱いてもらえると思います。
              </ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>Adobe XD</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">作品説明</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://xd.adobe.com/view/810fde4e-ceec-4e0c-8606-f5bb212ccd87-d45c/?fbclid=IwAR1pC-yl-yNEMhzvke3046Zdvbf9sGHjoDyITy-VqIPYQ1KL1KxCgidzoFQ"
              isExternal
            >
              https://xd.adobe.com/view/810fde4e-ceec-4e0c-8606-f5bb212ccd87-d45c/?fbclid=IwAR1pC-yl-yNEMhzvke3046Zdvbf9sGHjoDyITy-VqIPYQ1KL1KxCgidzoFQ
            </Link>
            <Text fontWeight="bold">作品URL</Text>
            <Text mb="16px">
              ※かなり力を入れて作っているので長いですが、ぜひ見ていただけると嬉しいです。
            </Text>
            <Link
              mb="16px"
              color="teal"
              href="https://xd.adobe.com/view/4f769e31-51bf-4157-be3a-d848ff81562e-1a25/"
              isExternal
            >
              https://xd.adobe.com/view/4f769e31-51bf-4157-be3a-d848ff81562e-1a25/
            </Link>
          </Box>
        </Box>
      )}
      {router.query.id === "6" && (
        <Box color={colorMode === "light" ? "black" : "white"}>
          <Heading fontSize="4xl" mb="16px">
            StaLog
          </Heading>
          <Swiper
            style={{
              "--swiper-navigation-color": "#329795",
              "--swiper-pagination-color": "#329795",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper5"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203144-b242aac1-5882-4ef8-82c6-5ddba6cec256.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203149-7b0156da-dbde-4e62-bc73-0642ac1bec8d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203153-de8831d8-9f63-4ba1-aa81-97a77ec12254.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203156-ea7ebdfb-1a4b-4646-a08b-9d5f996858c6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203158-3eb87108-00a7-4173-9c92-3de491f30835.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203163-44c18185-d3f6-4da7-9a75-01421d7f3f5e.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203167-68d43ea3-29aa-4b24-af4a-ed0edcb94f75.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203172-45ae8d94-de95-43f7-832a-6ac7112185e6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203174-5786e4ed-a5ca-47fc-a64e-58384fb5ba5b.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203144-b242aac1-5882-4ef8-82c6-5ddba6cec256.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203149-7b0156da-dbde-4e62-bc73-0642ac1bec8d.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203153-de8831d8-9f63-4ba1-aa81-97a77ec12254.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203156-ea7ebdfb-1a4b-4646-a08b-9d5f996858c6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203158-3eb87108-00a7-4173-9c92-3de491f30835.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203163-44c18185-d3f6-4da7-9a75-01421d7f3f5e.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203167-68d43ea3-29aa-4b24-af4a-ed0edcb94f75.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203172-45ae8d94-de95-43f7-832a-6ac7112185e6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://user-images.githubusercontent.com/66903388/192203174-5786e4ed-a5ca-47fc-a64e-58384fb5ba5b.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box mt="40px">
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              概要
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>「コロナ期間の自己成長」</ListItem>
              <ListItem>
                大学生である私の視点から、コロナ期間の孤独に打ち勝ち、大学に行けない間に同級生と差をつけるアプリを作りました。
              </ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              使用技術
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>Ruby on Rails</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Heroku</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              機能一覧
            </Heading>
            <UnorderedList mb="16px">
              <ListItem>ログイン機能</ListItem>
              <ListItem>ページネーション</ListItem>
              <ListItem>検索機能</ListItem>
              <ListItem>いいね機能</ListItem>
              <ListItem>DM機能</ListItem>
              <ListItem>コメント機能</ListItem>
              <ListItem>フォロー機能</ListItem>
              <ListItem>投稿機能</ListItem>
              <ListItem>カレンダー</ListItem>
            </UnorderedList>
            <Heading fontSize="3xl" borderBottom="2px solid black" mb="16px">
              作品リンク
            </Heading>
            <Text mb="16px">
              詳細な作品説明については以下のリンクから見ることができます。
            </Text>
            <Text fontWeight="bold">Githubリポジトリ</Text>
            <Link
              mb="16px"
              color="teal"
              href="https://github.com/Matsushoooo12/StaLog"
              isExternal
            >
              https://github.com/Matsushoooo12/StaLog
            </Link>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default DetailWork;
