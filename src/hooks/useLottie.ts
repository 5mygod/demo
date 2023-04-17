import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

export const useLottie = (
  resourcePath: string
): { ref: any; lottieData: any } => {
  const lottieRef = useRef<HTMLDivElement>(null);
  const [lottieData, setLottieData] = useState();

  useEffect(() => {
    if (!lottieData) {
      fetchLottie();
    }
  }, []);

  useEffect(() => {
    if (lottieRef.current && lottieData) {
      Lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lottieData,
      });
    }
  }, [lottieData]);

  const fetchLottie = async () => {
    try {
      const res = await fetch(resourcePath);
      const lottie = await res.json();
      setLottieData(() => lottie);
    } catch {
      throw new Error(`failed to load ${resourcePath}`);
    }
  };

  return { ref: lottieRef, lottieData };
};
