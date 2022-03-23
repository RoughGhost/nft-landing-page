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

  @media (max-width: 48em) {
    width: 90%;
  }
  h1 {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
 display; flex;
 align-items: center;
 margin: 0 auto;


 &>*{
   padding: 0.rem;
   transition: all 0.2s ease;
 }

 &:hover{
   transform: scale(1.2);
 }

`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Items = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
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
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="http://twitter.com" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Items onClick={() => scrollTo("home")}>Home</Items>
          <Items onClick={() => scrollTo("about")}>About</Items>
          <Items onClick={() => scrollTo("roadmap")}>Roadmap</Items>
          <Items onClick={() => scrollTo("showcase")}>Showcase</Items>
          <Items onClick={() => scrollTo("team")}>Team</Items>
          <Items onClick={() => scrollTo("faq")}>Faq</Items>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a
            href="https://strivesteve-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Strivesteve
          </a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
