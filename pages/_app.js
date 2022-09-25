import "../styles/globals.css";
import { Center, ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Header from "../components/Layouts/Header";

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
  return (
    <ChakraProvider theme={theme}>
      <Center h="100vh" position="relative" minWidth="1000px">
        <Header />
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
