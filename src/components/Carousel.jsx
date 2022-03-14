import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import { images } from "../assets";
import Arrow from "../assets/Arrow.svg";
const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;
    background-image: url(${Arrow});
    background-postion: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    width: 4rem;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-postion: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images.img1} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img2} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img3} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img4} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img5} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img6} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img7} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img8} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img9} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={images.img10} alt="The Weirdos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
