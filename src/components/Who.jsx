import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { useMediaQuery } from "@material-ui/core";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const ButtonLink = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`;

const Who = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const githubLink = "https://github.com/akm-xdd";

  return (
    <Section id="who">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>{isMobile ? "If you switch to a Desktop device, you can see a 3D rotating cube" : "This is a cool rotating cube that says Hello"}</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>The Who</Subtitle>
          </WhatWeDo>
          <Desc>
            A Computer Science Undergrad from University of Delhi, looking to learn and grow.
          </Desc>
          <ButtonLink href={githubLink} target="_blank">Check out my work</ButtonLink>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
