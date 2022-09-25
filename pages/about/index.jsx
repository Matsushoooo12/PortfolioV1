import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex
      width="800px"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDirection="column">
        <Heading alignSelf="center" mb="24px">
          『ものづくり』で生きていきたい
        </Heading>
        <Text mb="16px">
          私は独自のものづくりへの没頭に出会ったことで生きていることの楽しさを知りました。
          <br />
          現代は時代の流れがすぐに変わり、何を信じて生きたらいいのか、将来どうなるのか、将来の不安と絶望が渦巻いているように感じます。
          約10年後には半数の仕事がAIや人工知能で代替可能になると言われています。
          <br />
          また、そんな中で人生100年時代をどう生きていくのかが問われています。
          私は『ものづくり』こそがそんな現代の人々がより幸せに生きていく手段の一つであると考えます。
        </Text>
        <Text fontSize="20px" fontWeight="bold">
          私は『ものづくり』で生きながら、より人々がものづくりをしたくなるような価値を提供していきたいと思っています。
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
