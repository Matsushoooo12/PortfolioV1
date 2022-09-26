import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";
import MyRotatingBox from "./MyRotatingBox";
import { Center, Spinner } from "@chakra-ui/react";

const Model = dynamic(() => import("./Model"));

const DrawCanvas = () => (
  <Suspense
    fallback={
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Center>
    }
  >
    <Canvas>
      <OrbitControls />
      <MyRotatingBox>
        <Stage>
          <Model />
        </Stage>
      </MyRotatingBox>
    </Canvas>
  </Suspense>
);

export default DrawCanvas;
