import { Box, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ReactTyped from "react-typed";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import * as THREE from "three";
import DrawCanvas from "../components/DrawCanvas";

export default function Home() {
  return (
    <Box>
      <ReactTyped
        strings={[
          "Hello! I'm Shogo Matsumoto.",
          "I'm a software engineer.",
          "I love to creating different things and Katsukare🍛.",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          zIndex: 3,
        }}
      />
      <Box
        style={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          margin: "auto",
          zIndex: "-1",
          width: "1000px",
          height: "1000px",
          position: "absolute",
          pointerEvents: "auto",
        }}
      >
        <DrawCanvas />
      </Box>
    </Box>
  );
}
