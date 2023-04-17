import Header from "components/common/Header";
import Footer from "components/Footer";
import { PropsWithChildren } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { usePreloadImage } from "hooks/usePreloadImage";
import { useLazyLoadImage } from "hooks/useLazyLoadImage";

gsap.registerPlugin(ScrollTrigger);

export const Layout = ({ children }: PropsWithChildren) => {
  usePreloadImage();
  useLazyLoadImage();

  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
};
