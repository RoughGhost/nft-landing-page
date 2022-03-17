import React from "react";
import styled from "styled-components";
import { images } from "../../assets";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  justify-content: space-around;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={images.img1} name="Weirdos" position="founder" />
        <MemberComponent img={images.img2} name="Weirdos" position="founder" />
        <MemberComponent img={images.img3} name="Weirdos" position="founder" />
        <MemberComponent img={images.img4} name="Weirdos" position="founder" />
        <MemberComponent img={images.img5} name="Weirdos" position="founder" />
        <MemberComponent img={images.img6} name="Weirdos" position="founder" />
        <MemberComponent img={images.img7} name="Weirdos" position="founder" />
        <MemberComponent img={images.img8} name="Weirdos" position="founder" />
        <MemberComponent img={images.img9} name="Weirdos" position="founder" />
        <MemberComponent img={images.img10} name="Weirdos" position="founder" />
      </Container>
    </Section>
  );
};

export default Team;
