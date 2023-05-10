import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  scroll-snap-align: center;
  /* background-color: #1c1c1c; */
`;

const Text = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #da4ea2;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>
        © {new Date().getFullYear()}  All Rights Reserved. &nbsp;Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by <Link href="https://github.com/akm-xdd">Anand</Link>.
        <br/>
        <br/>
        All 3D assets are duly credited on my Github Repository for this website.
      </Text>
    </FooterContainer>
  );
};

export default Footer;
