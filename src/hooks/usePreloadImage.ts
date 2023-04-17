import { useEffect } from "react";

export const PRELOAD_IMAGE_LIST = [
  "planet_1_img-min.jpg",
  "planet_2_img-min.jpg",
  "planet_3_img-min.jpg",
  "planet_4_img-min.jpg",
  "planet_5_img-min.jpg",
  "planet_6_img-min.jpg",
  "planet_7_img-min.jpg",
];

export const usePreloadImage = () => {
  useEffect(() => {
    PRELOAD_IMAGE_LIST.map((image) => (new Image().src = image));
  }, []);
};
