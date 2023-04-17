import styled from "@emotion/styled";
import BaseContainer from "components/common/Container";
import { Spacing } from "components/common/Spacing";
import { Text } from "components/common/Text";
import { gsap, Power2 } from "gsap";
import { SECOND_SECTION_ID } from "hooks/useSectionSelector";
import { useEffect, useRef } from "react";
import { Mediaqueries } from "styles/mediaqueries";

const IMAGE_COUNT = 7;

const ThirdSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalLine1Ref = useRef<HTMLDivElement>(null);
  const verticalLine2Ref = useRef<HTMLDivElement>(null);
  const horizontalLine1Ref = useRef<HTMLDivElement>(null);
  const horizontalLine2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top",
      },
    });

    timeline
      .to(verticalLine1Ref.current, {
        height: "100%",
        duration: 0.25,
      })
      .to(verticalLine2Ref.current, {
        height: "100%",
        duration: 0.25,
      })
      .to(horizontalLine1Ref.current, {
        width: "100%",
        duration: 0.25,
      })
      .to(horizontalLine2Ref.current, {
        width: "100%",
        duration: 0.25,
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".rwb-item-image",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
        },
      }
    );
  }, []);

  return (
    <Container
      id={SECOND_SECTION_ID}
      className="third-section__container"
      ref={containerRef}
    >
      <LayoutContainer>
        {Array(IMAGE_COUNT)
          .fill(0)
          .map((_, index) => {
            const fileName = `/planet_${index + 1}_img-min.jpg`;
            return (
              <div className="rwb-item-image">
                <img src={fileName} key={fileName} />
              </div>
            );
          })}
      </LayoutContainer>
      <ContentContainer>
        <Text typography="h2">RWD</Text>
        <Spacing size={20} />
        <Text typography="p">화면을 줄이고, 다시 늘려보세요!</Text>
        <Spacing size={4} mobileSize={2} />
        <Text typography="p">
          보고 있는 화면 너비에 알맞게 레이아웃이 변화합니다.
        </Text>
      </ContentContainer>
    </Container>
  );
};

const Container = styled(BaseContainer)`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  min-height: 100vh;

  .line {
    position: absolute;
    opacity: 0.2;
  }

  ${Mediaqueries.모바일} {
    flex-direction: column;
    min-height: auto;
    padding: 5rem 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    right: 0px;
    border-top: 1px solid black;
    border-right: 1px solid black;
  }

  ${Mediaqueries.모바일} {
    order: 1;
    width: 92%;
  }
`;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 12px;

  .rwb-item-image {
    img {
      max-width: 120px;
      max-height: 120px;
      border-radius: 12px;
      object-fit: fill;
      height: 100%;
    }
  }

  ${Mediaqueries.모바일} {
    & {
      display: block;
      order: 2;
      width: 92%;
      padding: 0 20px;
      margin-top: 20px;
    }

    .rwb-item-image {
      width: 100%;
      margin-bottom: 12px;

      &:last-of-type {
        margin-bottom: 0;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 12px;
        object-fit: fill;
      }
    }
  }
`;

export default ThirdSection;
