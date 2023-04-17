import Header from "components/common/Header";
import Footer from "components/Footer";
import { PropsWithChildren } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { usePreloadImage } from "hooks/usePreloadImage";

gsap.registerPlugin(ScrollTrigger);

export const Layout = ({ children }: PropsWithChildren) => {
  usePreloadImage();

  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
};
