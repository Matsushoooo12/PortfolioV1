import { useFrame } from "@react-three/fiber";
import React from "react";

const MyRotatingBox = ({ children }) => {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });
  return <mesh ref={myMesh}>{children}</mesh>;
};

export default MyRotatingBox;
