import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  /* margin-bottom: 20px; */
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
    transition: all 0.3s ease;

    &:hover {
      color: #da4ea2;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo-dark.png" />
          <List>
            <ListItem>
              <a href="#what">The What</a>
            </ListItem>
            <ListItem>
              <a href="#who">The Who</a>
            </ListItem>
            <ListItem>
              <a href="#how">The How</a>
            </ListItem>
            <ListItem>
              <a href="#where">The Where</a>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button>This button does nothing!</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
