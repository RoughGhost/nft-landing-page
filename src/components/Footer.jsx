import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;

  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  display: flex;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconList = styled.div`
 display; flex;
 align-items: center;
 margin: 0 auto;


 &>*{
   padding: 0.rem;
   transform: all 0.2s ease;
 }

 &:hover{
   transform: scale(1.2);
 }

`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
      </Container>
    </Section>
  );
};

export default Footer;
