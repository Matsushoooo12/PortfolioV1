import "../styles/globals.css";
import "swiper/css/bundle";
import {
  Center,
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Header from "../components/Layouts/Header";
import { useState } from "react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <ChakraProvider theme={theme}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ChakraProvider>
  );
}

export default MyApp;
