import "swiper/swiper.min.css";
import { useRef } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SWIPER_DATA } from "mock";
import { motion } from "framer-motion";
import { Mediaqueries } from "styles/mediaqueries";
import useIsMobileScreen from "hooks/useIsMobile";

SwiperCore.use([Navigation, Scrollbar]);

export const Slider = () => {
  const swiperRef = useRef<any>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobileScreen();

  const SwiperConfig = {
    effect: "coverflow" as "coverflow",
    slidesPerView: !isMobile ? 3 : 1,
    centerInsufficientSlides: true,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      depth: !isMobile ? 100 : 0,
      modifier: 1,
      slideShadows: false,
    },
  };

  const handleSlideChange = (id: number) => {
    if (swiperRef.current) {
      swiperRef.current?.slideTo(id);
    }
  };

  return (
    <>
      <ControlButtonContainer>
        {SWIPER_DATA.map((swiperData) => (
          <SwipeControlTab
            key={swiperData.id}
            className="swiper-control-tab"
            initial={{
              backgroundColor: "#efefef",
            }}
            whileHover={{ backgroundColor: "#333", color: "#fff" }}
          >
            <input
              type="radio"
              name="swiper-control"
              id={`swipe-card-${swiperData.id}`}
              onClick={() => {
                handleSlideChange(swiperData.id);
              }}
            />
            <motion.label htmlFor={`swipe-card-${swiperData.id}`}>
              {swiperData.name}
            </motion.label>
          </SwipeControlTab>
        ))}
      </ControlButtonContainer>
      <Container className="swiper-container">
        <StyledButton
          className="btn-swipe--left"
          ref={prevButtonRef}
          initial={{
            background: "#fff",
          }}
          whileHover={{
            background: "#efefef",
          }}
        >
          <img
            src="/icn-swiper-left.png"
            onClick={() => swiperRef.current.slidePrev()}
          />
        </StyledButton>
        <Swiper
          modules={[EffectCoverflow]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          {...SwiperConfig}
        >
          {SWIPER_DATA.map((swiperData) => (
            <SwiperSlide>
              <SwiperImage src={swiperData.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <StyledButton
          className="btn-swipe--right"
          ref={nextButtonRef}
          initial={{
            background: "#fff",
          }}
          whileHover={{
            background: "#efefef",
          }}
        >
          <img
            src="/icn-swiper-right.png"
            onClick={() => swiperRef.current.slideNext()}
          />
        </StyledButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 50rem;
  display: flex;
  overflow-x: hidden;

  .swiper {
    padding: 1.25rem 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  ${Mediaqueries.모바일} {
    max-width: 100%;
  }
`;

const ControlButtonContainer = styled.div`
  margin: 1.25rem 0 2.5rem 0;
  display: flex;

  ${Mediaqueries.모바일} {
    margin: 0;
    width: 92%;
    padding: 24px 0;
    overflow-x: scroll;
  }
`;

const SwiperImage = styled.img`
  max-width: 11.25rem;
  border-radius: 1.25rem;
  height: 100%;
  object-fit: cover;
  border-radius: 30;
  box-shadow: 0.0625rem 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.2);

  ${Mediaqueries.모바일} {
    max-width: 6.25rem;
  }
`;

const StyledButton = styled(motion.button)`
  border-radius: 50%;
  border: none;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto 0;
  background: #fff;

  &:first-of-type {
    margin-right: 1.5rem;
  }

  &:last-of-type {
    margin-left: 1.5rem;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SwipeControlTab = styled(motion.div)`
  border-radius: 0.75rem;
  background-color: #efefef;
  box-shadow: 0.0625rem 0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  color: #333;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 0.9375rem;
  cursor: pointer;
  margin: 0 0.375rem;
  white-space: nowrap;

  & > input {
    display: none;
  }

  &:hover {
    background-color: #333;
  }
`;
