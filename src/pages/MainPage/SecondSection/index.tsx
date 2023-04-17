import styled from "@emotion/styled";
import BaseContainer from "components/common/Container";
import { useEffect, useRef, useState } from "react";
import Button from "components/common/Button";
import { Mediaqueries } from "styles/mediaqueries";
import { gsap } from "gsap";
import { BASE_COLORS } from "constants/ui";
import { Text } from "components/common/Text";
import { Spacing } from "components/common/Spacing";
import { FIRST_SECTION_ID } from "hooks/useSectionSelector";

const COLOR_VARIANT_COUNT = 4;
const INITIAL_COLOR_VARIANT = 1;

const SecondSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const backgroundCircle1Ref = useRef<HTMLDivElement>(null);
  const backgroundCircle2Ref = useRef<HTMLDivElement>(null);
  const backgroundCircle3Ref = useRef<HTMLDivElement>(null);
  const triggerCircleRef = useRef<HTMLDivElement>(null);
  const effectCircleRef = useRef<HTMLDivElement>(null);
  const [triggerCount, setTriggerCount] = useState(1);
  const [isTriggered, setIsTriggered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=50%",
        toggleActions: "play none play reverse",
      },
    });
    timeline
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
        }
      )
      .fromTo(
        contentContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
        }
      )
      .to(".press-me-icon", {
        bottom: -20,
        left: 20,
        repeat: 0,
      })
      .to(".press-me-icon", {
        scale: 0.8,
      })
      .to(".press-me-icon", {
        scale: 1,
        opacity: 0,
      });
  }, []);

  useEffect(() => {
    if (backgroundCircle1Ref.current) {
      gsap.to(backgroundCircle1Ref.current, {
        yPercent: -20,
        scrollTrigger: {
          trigger: backgroundCircle1Ref.current,
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (backgroundCircle2Ref.current) {
      gsap.to(backgroundCircle2Ref.current, {
        yPercent: -100,
        xPercent: -60,
        scrollTrigger: {
          trigger: backgroundCircle2Ref.current,
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (backgroundCircle3Ref.current) {
      gsap.to(backgroundCircle3Ref.current, {
        yPercent: -30,
        xPercent: -25,
        scale: 1.5,
        scrollTrigger: {
          trigger: backgroundCircle3Ref.current,
          scrub: true,
        },
      });
    }
  }, []);

  const toggleColor = () => {
    setIsTriggered((prev) => !prev);

    if (isTriggered) {
      triggerCircleRef.current?.classList.add("motion-triggered");
      effectCircleRef.current?.classList.add(
        "motion-triggered",
        `color-variant-${triggerCount}`
      );
    } else {
      triggerCircleRef.current?.classList.remove("motion-triggered");
      effectCircleRef.current?.classList.remove(
        "motion-triggered",
        `color-variant-${triggerCount}`
      );

      const _triggerCount =
        triggerCount >= COLOR_VARIANT_COUNT
          ? INITIAL_COLOR_VARIANT
          : triggerCount + 1;

      setTriggerCount(() => _triggerCount);
    }
  };

  const autoToggleColor = () => {
    if (!isAutoPlaying) {
      setIsAutoPlaying(true);
      toggleColor();

      timerRef.current = setInterval(() => {
        toggleColor();
      }, 2_000);
    }
  };

  const pause = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      clearTimeout(timerRef.current);
    }
  };

  return (
    <Container
      ref={containerRef}
      id={FIRST_SECTION_ID}
      className="second-section__container"
    >
      <BackgroundCircle1 ref={backgroundCircle1Ref} />
      <BackgroundCircle2 ref={backgroundCircle2Ref} />
      <BackgroundCircle3 ref={backgroundCircle3Ref} />
      <ContentContainer ref={contentContainerRef}>
        <TextContainer>
          <Text typography="h2">Motion</Text>
          <Spacing size={8} mobileSize={12} />
          <Text typography="p">
            Motion 섹션에서는 다양한 애니메이션 모션을 시연합니다.
          </Text>
          <Spacing size={4} mobileSize={2} />
          <Text typography="p">분홍색 원에 커서나 손가락을 올려 보세요!</Text>
          <Spacing mobileSize={20} />
        </TextContainer>
        <AnimationContainer>
          <ShapeContainer>
            <div
              ref={triggerCircleRef}
              className="circle__box circle__box--left"
            >
              <div className="circle circle--left" />
            </div>
            <div className="bar" />
            <div
              ref={effectCircleRef}
              className="circle__box circle__box--right"
            >
              <div className="circle circle--right" />
            </div>
          </ShapeContainer>
          <ButtonContainer>
            <Button
              className="press-me-btn"
              whileHover={{
                backgroundColor: "#fe0000",
              }}
              onClick={toggleColor}
            >
              Press Me!
              <img
                src="/img-finger.png"
                alt="press-me-indicator"
                className="press-me-icon"
              />
            </Button>
            <Button disabled onClick={!isAutoPlaying ? autoToggleColor : pause}>
              {!isAutoPlaying ? "AutoPlay" : "Pause"}
            </Button>
          </ButtonContainer>
        </AnimationContainer>
      </ContentContainer>
    </Container>
  );
};

const BackgroundCircle1 = styled.div`
  border-radius: 50%;
  width: 37.5rem;
  height: 37.5rem;
  position: absolute;
  top: -7.5rem;
  left: -7.5rem;
  opacity: 0.65;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(234, 0, 44, 1) 89%
  );
  z-index: -1;

  ${Mediaqueries.모바일} {
    width: 13.75rem;
    height: 13.75rem;
    top: -7.5rem;
    left: -2.5rem;
  }
`;

const BackgroundCircle2 = styled.div`
  border-radius: 50%;
  width: 17.5rem;
  height: 17.5rem;
  position: absolute;
  bottom: -7.5rem;
  left: 50%;
  opacity: 0.9;
  background: rgb(110, 199, 149);
  background: linear-gradient(
    0deg,
    rgba(110, 199, 149, 1) 18%,
    rgba(152, 242, 50, 0.2) 100%
  );
  z-index: -1;

  ${Mediaqueries.모바일} {
    width: 5rem;
    height: 5rem;
    bottom: 0;
    right: 2.5rem;
  }
`;

const BackgroundCircle3 = styled.div`
  border-radius: 50%;
  width: 26.25rem;
  height: 26.25rem;
  position: absolute;
  top: 20%;
  right: -12.5rem;
  opacity: 0.9;
  background: rgb(115, 241, 215);
  background: linear-gradient(
    0deg,
    rgba(115, 241, 215, 1) 18%,
    rgba(50, 207, 242, 0.2) 100%
  );
  z-index: -1;

  ${Mediaqueries.모바일} {
    width: 7.5rem;
    height: 7.5rem;
    right: 0;
  }
`;

const Container = styled(BaseContainer)`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  max-width: 100%;

  ${Mediaqueries.모바일} {
    flex-direction: column;
    padding: 5rem 0;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-evenly;
  align-items: center;

  ${Mediaqueries.모바일} {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  ${Mediaqueries.모바일} {
    width: 92%;
  }
`;

const AnimationContainer = styled.div`
  background: #fff;
  border-radius: 1.25rem;
  padding: 2.25rem;
  opacity: 0;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.2);
  border-left: 0.0625rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 0.25rem 0.25rem 0.125rem 0.125rem rgba(0, 0, 0, 0.2);
  opacity: 1;
  backdrop-filter: blur(0.125rem);
`;

const ShapeContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 13.125rem;
  width: 16.125rem;

  & > .bar {
    height: 8.25rem;
    width: 0.125rem;
    background: #e7e7e7;
  }

  .circle__box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circle {
    width: 5.375rem;
    height: 5.375rem;
    cursor: pointer;
  }

  .circle--left::after {
    content: "";
    opacity: 1;
    position: absolute;
    width: 5.375rem;
    height: 5.375rem;
    background: #fe0955;
    border-radius: 50%;
    transition: 0.45s ease-in-out all;
  }

  .motion-triggered .circle--left::after {
    opacity: 1;
    transition: 0.45s ease-in-out all;
    transform: translateX(200%);
  }

  .circle--right::after {
    content: "";
    opacity: 1;
    position: absolute;
    width: 5.375rem;
    height: 5.375rem;
    border-radius: 50%;
    transition: 0.45s ease-in-out all;
    transform: translateX(-200%);
  }

  .motion-triggered .circle--right::after {
    opacity: 1;
    transition: 0.45s ease-in-out all;
    transform: translateX(0);
  }

  .color-variant-1 .circle--right::after {
    background: #ffd35c;
  }

  .color-variant-2 .circle--right::after {
    background: #29afff;
  }

  .color-variant-3 .circle--right::after {
    background: #50ebc3;
  }

  .color-variant-4 .circle--right::after {
    background: #fb9f5f;
  }

  @keyframes mutateColor {
    0% {
      opacity: 1;
      transition: 0.45s ease-in-out all;
      transform: translateX(0);
      background: #ffd35c;
    }
    25% {
      opacity: 1;
      transition: 0.45s ease-in-out all;
      transform: translateX(0);
      background: #29afff;
    }
    50% {
      opacity: 1;
      transition: 0.45s ease-in-out all;
      transform: translateX(0);
      background: #50ebc3;
    }
    100% {
      opacity: 1;
      transition: 0.45s ease-in-out all;
      transform: translateX(0);
      background: #fb9f5f;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  .press-me-btn {
    position: relative;
  }

  .press-me-icon {
    left: -5rem;
    bottom: -5rem;
    position: absolute;
  }
`;

export default SecondSection;
