import { useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/practice03.glb");
  return <primitive object={gltf.scene} />;
};

export default Model;
