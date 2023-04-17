import { useEffect } from "react";

export const useLazyLoadImage = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function (lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        console.log("Intersection Observer를 지원하지 않는 브라우저입니다.");
      }
    });
  }, []);
};
