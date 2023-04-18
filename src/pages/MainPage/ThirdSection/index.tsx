import styled from "@emotion/styled";
import BaseContainer from "components/common/Container";
import { Spacing } from "components/common/Spacing";
import { Text } from "components/common/Text";
import { gsap, Power2 } from "gsap";
import { SECOND_SECTION_ID } from "hooks/useSectionSelector";
import { useEffect, useRef } from "react";
import { Mediaqueries } from "styles/mediaqueries";
import lozad from "lozad";

const IMAGE_COUNT = 7;

const ThirdSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const verticalLine1Ref = useRef<HTMLDivElement>(null);
  const verticalLine2Ref = useRef<HTMLDivElement>(null);
  const verticalLine3Ref = useRef<HTMLDivElement>(null);
  const verticalLine4Ref = useRef<HTMLDivElement>(null);
  const horizontalLine1Ref = useRef<HTMLDivElement>(null);
  const horizontalLine2Ref = useRef<HTMLDivElement>(null);
  const horizontalLine3Ref = useRef<HTMLDivElement>(null);
  const horizontalLine4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

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
      })
      .to(verticalLine2Ref.current, {
        height: "100%",
      })
      .to(verticalLine3Ref.current, {
        height: "100%",
      })
      .to(verticalLine4Ref.current, {
        height: "100%",
      })
      .to(horizontalLine1Ref.current, {
        width: "100%",
      })
      .to(horizontalLine2Ref.current, {
        width: "100%",
      })
      .to(horizontalLine3Ref.current, {
        width: "100%",
      })
      .to(horizontalLine4Ref.current, {
        width: "100%",
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      contentContainerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
        },
      }
    );

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

  useEffect(() => {
    const verticalLineList = gsap.utils.toArray(".vertical-line");
    const horizontalLineList = gsap.utils.toArray(".horizontal-line");

    verticalLineList.forEach((line, index) => {
      gsap.set(line as any, {
        left: index * 200,
      });
    });

    horizontalLineList.forEach((line, index) => {
      gsap.set(line as any, {
        top: index * 100,
      });
    });

    gsap.to(".vertical-line", {
      height: "100%",
      right: (index) => index * 100,
      stagger: 0.25,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top",
      },
    });

    gsap.to(".horizontal-line", {
      width: "100%",
      stagger: 0.25,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top",
      },
    });
  }, []);

  return (
    <Container id={SECOND_SECTION_ID} ref={containerRef}>
      <LineContainer>
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <>
              <VerticalLine
                className="vertical-line"
                key={`vertical-line-${index}`}
              />
              <HorizontalLine
                className="horizontal-line"
                key={`horizontal-line-${index}`}
              />
            </>
          ))}
      </LineContainer>
      <GallaryContainer className="rwb-gallary-container">
        <Gallary className="rwb-gallary">
          {Array(IMAGE_COUNT * 3)
            .fill(0)
            .map((_, index) => {
              const fileName = `/planet_${
                (index % IMAGE_COUNT) + 1
              }_img-min.jpg`;
              return (
                <div className="rwb-item-image">
                  <img
                    src={fileName}
                    key={fileName}
                    alt={fileName}
                    loading="lazy"
                    className="lozad"
                  />
                </div>
              );
            })}
        </Gallary>
        <Spacing size={40} mobileSize={8} />
      </GallaryContainer>
      <ContentContainer ref={contentContainerRef}>
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
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;

  .line {
    position: absolute;
    opacity: 0.2;
  }

  ${Mediaqueries.모바일} {
    flex-direction: column;
    min-height: auto;
    padding: 80px 0;
  }
`;

const LineContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 0.0625rem;
  height: 0%;
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 0%;
  height: 0.0625rem;
`;

const ContentContainer = styled.div`
  position: relative;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0rem;
    right: 0rem;
    border-top: 0.0625rem solid black;
    border-right: 0.0625rem solid black;
  }

  ${Mediaqueries.모바일} {
    order: 1;
    width: 92%;
  }
`;

const GallaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;

  ${Mediaqueries.모바일} {
    order: 2;
    margin-right: 0;
  }
`;

const Gallary = styled.div`
  column-count: 4;
  column-gap: 0.625rem;

  .rwb-item-image {
    img {
      max-width: 7.5rem;
      height: auto;
      border-radius: 0.75rem;
      object-fit: fill;
    }
  }

  ${Mediaqueries.모바일} {
    & {
      column-count: 1;
      display: block;
      order: 2;
      width: 92%;
      padding: 0 1.25rem;
      margin-top: 1.25rem;
    }

    .rwb-item-image {
      width: 100%;
      margin-bottom: 0.75rem;

      &:last-of-type {
        margin-bottom: 0;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 0.75rem;
        object-fit: fill;
      }
    }
  }
`;

export default ThirdSection;
