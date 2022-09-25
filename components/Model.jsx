import { useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/practice04.glb");
  return <primitive object={gltf.scene} />;
};

export default Model;
