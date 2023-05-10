import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import JavaModel from './JavaModel'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <JavaModel />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default WebDesign;
