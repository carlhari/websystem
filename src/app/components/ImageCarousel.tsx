/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
const images = ["slide01", "slide02", "slide03"];
const ImageCarousel = () => {
  return (
    <div className="slider">
      <div className="content">
        <Splide
          options={{
            type: "loop",
            focus: "center",
            autoWidth: true,
            pagination: false,
            slideFocus: 2,
          }}
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={`/assets/visual/${src}.jpg`}
                className="img"
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ImageCarousel;