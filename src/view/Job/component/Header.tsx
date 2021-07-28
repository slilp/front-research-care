import React from "react";
import { HeaderSection, ProductImageBox } from "../style";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function Header() {
  const slides = [];

  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide key={`${i}`}>
        <ProductImageBox></ProductImageBox>
      </SwiperSlide>
    );
  }

  return (
    <HeaderSection className="d-flex align-items-center p-3">
      <Container>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          virtual
          slidesPerView={1}
          spaceBetween={10}
          loop
          grabCursor
          navigation
          autoplay
        >
          {slides}
        </Swiper>
      </Container>
    </HeaderSection>
  );
}

export default Header;
