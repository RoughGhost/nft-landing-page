import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { images } from "../../assets";
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};

`;

const Row = styled.div`
  // background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const Nftitem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <Nftitem img={images.img1} number={680} price={1} passRef={Row1Ref} />
        <Nftitem img={images.img2} number={600} price={1.3} passRef={Row1Ref} />
        <Nftitem img={images.img3} number={114} price={1.8} passRef={Row1Ref} />
        <Nftitem img={images.img4} number={214} price={3.5} passRef={Row1Ref} />
        <Nftitem img={images.img5} number={994} price={6.5} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <Nftitem img={images.img6} number={642} price={4.5} passRef={Row2Ref} />
        <Nftitem img={images.img7} number={394} price={3.5} passRef={Row2Ref} />
        <Nftitem img={images.img8} number={459} price={9.5} passRef={Row2Ref} />
        <Nftitem img={images.img9} number={601} price={5.5} passRef={Row2Ref} />
        <Nftitem
          img={images.img10}
          number={754}
          price={2.5}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
