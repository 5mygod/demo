import styled from "@emotion/styled";
import { gsap } from "gsap";
import {
  FIRST_SECTION_ID,
  SECOND_SECTION_ID,
  THIRD_SECTION_ID,
  useSectionSelector,
} from "hooks/useSectionSelector";
import { useEffect, useRef, useState } from "react";
import { Mediaqueries } from "styles/mediaqueries";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { currentSection } = useSectionSelector();

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top+=100",
        toggleActions: "play none reverse reverse",
      },
      width: "100%",
      borderRadius: 0,
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <Container className="gnb-container" ref={containerRef}>
      <a href="https://careers.skplanet.com/home" target="__blank">
        <img
          className="gnb-logo"
          src="/skplanet.png"
          alt="SK Planet CI"
          height={40}
        />
      </a>
      <div
        className={`mobile-gnb-dimmer ${isSidebarOpen ? "" : "sidebar-close"}`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <ul
        className={`gnb-items__container ${
          isSidebarOpen ? "sidebar-open" : "sidebar-close"
        }`}
      >
        <li
          className={`gnb-item ${
            currentSection === "motion-section" ? "current-section" : ""
          }`}
        >
          <a href={`#${FIRST_SECTION_ID}`}>Motion</a>
        </li>
        <li
          className={`gnb-item ${
            currentSection === "rwd-section" ? "current-section" : ""
          }`}
        >
          <a href={`#${SECOND_SECTION_ID}`}>RWD</a>
        </li>
        <li
          className={`gnb-item ${
            currentSection === "swiper-section" ? "current-section" : ""
          }`}
        >
          <a href={`#${THIRD_SECTION_ID}`}>Swiper</a>
        </li>
      </ul>
      <img
        className="icn-sidebar-toggle"
        alt="네비게이션 열기"
        src="/hamburger.png"
        onClick={() => setIsSidebarOpen(true)}
      />
    </Container>
  );
};

const Container = styled.header`
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 2.25rem;
  width: 90%;
  left: 5%;
  height: 3.75rem;
  z-index: 999;
  background: #fff;

  .mobile-gnb-dimmer {
    display: none;
  }

  .gnb-logo {
    position: absolute;
    left: 2.25rem;
    top: 0.625rem;
  }

  .gnb-items__container {
    display: flex;
    align-items: center;

    & > .gnb-item {
      font-weight: 500;
      margin: 0 2rem;
      position: relative;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        transform: translateX(-50%);
        left: 50%;
        width: 0%;
        border-bottom: 0.1875rem solid red;
        border-radius: 0.75rem;
        transition: 0.3s ease-in-out width;
      }

      &:hover::after {
        width: 100%;
      }
    }

    & > .gnb-item.current-section::after {
      width: 100%;
    }
  }

  .icn-sidebar-toggle {
    position: absolute;
    right: 2.25rem;
    width: 1.75rem;
    height: 1.75rem;
    top: calc(50% - 0.875rem);
    display: none;
  }

  ${Mediaqueries.모바일} {
    .gnb-items__container {
      flex-direction: column;
      position: fixed;
      width: 60%;
      gap: 1.25rem;
      padding-top: 1.25rem;
      height: 100vh;
      right: 0;
      top: 0;
      background: #fff;
      z-index: 1;
      transition: 0.3s ease-in-out all;
    }

    .mobile-gnb-dimmer {
      background-color: rgba(0, 0, 0, 0.2);
      display: inline;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
    }

    .sidebar-open {
      max-width: 60%;
    }

    .sidebar-close {
      max-width: 0%;
      opacity: 0;
    }

    & > .gnb-item {
      font-weight: 500;
      text-align: center;
      position: relative;
      cursor: pointer;
      margin: 1rem 0;

      &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        transform: translateX(-50%);
        left: 50%;
        width: 0%;
        border-bottom: 0.1875rem solid red;
        transition: 0.3s ease-in-out width;
      }

      &:hover::after {
        width: 100%;
      }

      .gnb-items__container {
        margin-top: 1.5rem;
      }
    }

    .gnb-logo {
      position: absolute;
      left: 1.5rem;
      top: 0.625rem;
    }

    .icn-sidebar-toggle {
      display: block;
      right: 1.5rem;
    }
  }
`;

export default Header;
