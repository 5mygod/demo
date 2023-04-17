import { useEffect, useState } from "react";
import { Mediaqueries } from "styles/mediaqueries";

const useIsMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(Mediaqueries.모바일);

    function handler() {
      if (mediaQuery.matches) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    }

    mediaQuery.addListener(handler);
    handler();

    return () => {
      mediaQuery.removeListener(handler);
    };
  }, []);

  return isMobileScreen;
};

export default useIsMobileScreen;
