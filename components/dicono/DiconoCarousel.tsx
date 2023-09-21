"use client";
import React from "react";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "@/components/courses/courseCard";
import "swiper/css/bundle";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { DiconoContent } from "@/public/types/DiconoContent";
import DiconoCard from "./DiconoCard";

type Props = {
  content: DiconoContent[];
};

function DiconoCarousel({ content }: Props) {
  return (
    <section className="max-w-7xl mx-auto w-full relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {content.map((dicono) => {
          return (
            <SwiperSlide className="px-16" key={dicono.id}>
              <DiconoCard content={dicono} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default DiconoCarousel;
