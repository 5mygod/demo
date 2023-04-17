import styled from "@emotion/styled";
import BaseContainer from "components/common/Container";
import { BASE_COLORS } from "constants/ui";
import { Power1, gsap } from "gsap";
import { useLottie } from "hooks/useLottie";
import { useEffect, useRef, useState } from "react";
import { Mediaqueries } from "styles/mediaqueries";

const FirstSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowLottieContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const spaceContainerRef = useRef<HTMLDivElement>(null);
  const { ref: planetLottieRef } = useLottie("/planet-lottie.json");
  const { ref: arrowLottieRef } = useLottie("/scroll-arrow-lottie.json");

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".first-section-curtain", {
        stagger: 0.35,
        ease: Power1.easeInOut,
        opacity: 1,
        y: "0",
      })
      .to(titleContainerRef.current, {
        opacity: 1,
      });

    gsap.to(arrowLottieContainerRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "body",
        start: "top+=200",
        toggleActions: "play none reverse reverse",
      },
    });

    gsap.to(spaceContainerRef.current, {
      backgroundColor: "#000",
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=50%",
        toggleActions: "play none reverse reverse",
      },
    });
  }, []);

  return (
    <>
      <Container ref={containerRef} className="first-section__container">
        <CurtainContainer>
          {BASE_COLORS.map((color, index) => {
            return (
              <Curtain
                color={color}
                index={index}
                key={index}
                className="first-section-curtain"
              />
            );
          })}
        </CurtainContainer>
        <TitleContainer ref={titleContainerRef}>
          <PlanetLottieContainer
            id="first-section__planet-lottie"
            ref={planetLottieRef}
          />
          <h1 className="hero-title">
            Planet No 1.
            <br />
            UI Development Group
          </h1>
          <h3 className="first-section__subtitle">SK Planet WP TEAM</h3>
        </TitleContainer>
        <div
          ref={arrowLottieContainerRef}
          className="first-section__arrow--container"
        >
          <ArrowLottieContainer
            id="first-section__arrow-lottie"
            ref={arrowLottieRef}
          />
          <h3 className="first-section__subtitle">Scroll Down</h3>
        </div>
      </Container>
    </>
  );
};

const Container = styled(BaseContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .first-section__arrow--container {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 5rem;

    & > .first-section__subtitle {
      text-align: center;
      font-size: 0.75rem;
      color: rgba(0, 0, 0, 0.7);
    }

    ${Mediaqueries.모바일} {
      bottom: 2rem;
    }
  }
`;

const TitleContainer = styled.div`
  opacity: 0;
  font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  padding: 0 1.25rem;

  & > .hero-title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5.25rem;
    margin-bottom: 2rem;
    text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);

    ${Mediaqueries.모바일} {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      line-height: 2.5rem;
    }
  }

  & > .first-section__subtitle {
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
  }
`;

const CurtainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
`;

const PlanetLottieContainer = styled.div`
  max-width: 22.5rem;
  max-height: 22.5rem;
  margin: 0 auto;
`;

const ArrowLottieContainer = styled.div`
  max-width: 7.5rem;
  max-height: 7.5rem;
`;

const Curtain = styled.div<{ index: number; color: string }>`
  z-index: ${({ index }) => index};
  background: ${({ color }) => color};
  height: 100vh;
  flex: 1;
  opacity: 0;
  transform: translateY(-100%);
`;

export default FirstSection;
