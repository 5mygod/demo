import { useEffect, useState } from "react";

export const FIRST_SECTION_ID = "motion-section";
export const SECOND_SECTION_ID = "rwd-section";
export const THIRD_SECTION_ID = "swiper-section";

type Section =
  | typeof FIRST_SECTION_ID
  | typeof SECOND_SECTION_ID
  | typeof THIRD_SECTION_ID;

export const useSectionSelector = () => {
  const [currentSection, setCurrentSection] = useState<Section>();

  const getScrollPositionById = (scrollPosition: number) => {
    const firstSectionPosition =
      document.getElementById(FIRST_SECTION_ID)?.offsetTop || 0;
    const secondSectionPosition =
      document.getElementById(SECOND_SECTION_ID)?.offsetTop || 0;
    const thirdSectionPosition =
      document.getElementById(THIRD_SECTION_ID)?.offsetTop || 0;

    if (
      firstSectionPosition <= scrollPosition &&
      scrollPosition < secondSectionPosition
    ) {
      setCurrentSection(FIRST_SECTION_ID);
    } else if (
      secondSectionPosition <= scrollPosition &&
      scrollPosition < thirdSectionPosition
    ) {
      setCurrentSection(SECOND_SECTION_ID);
    } else if (scrollPosition >= thirdSectionPosition) {
      setCurrentSection(THIRD_SECTION_ID);
    } else {
      setCurrentSection(undefined);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      getScrollPositionById(window.scrollY);
    });
  }, []);

  return { currentSection };
};
