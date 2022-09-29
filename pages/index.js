import {
  Box,
  Center,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ReactTyped from "react-typed";
import DrawCanvas from "../components/DrawCanvas";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ReactTyped
        strings={[
          "Hello! I'm Shogo Matsumoto.",
          "I'm a software engineer.",
          "I love Katsukare🍛.",
          "I also love app development.",
          "If you want to see my information, please go to About page..",
          "If you want to see my background, please go to Career page.",
          "If you want to see my portfolio, please go to the Works page.",
          "By the way, you can move the 3D model by dragging.",
          "Have fun!＼(^o^)／",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          zIndex: 3,
          color: colorMode === "light" ? "black" : "white",
        }}
      />
      <Box>
        <Box
          style={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            margin: "auto",
            zIndex: "1",
            width: "2000px",
            height: "2000px",
            position: "absolute",
            pointerEvents: "auto",
          }}
        >
          <DrawCanvas />
        </Box>
      </Box>
    </>
  );
}
