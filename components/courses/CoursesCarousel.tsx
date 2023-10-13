"use client";
import React from "react";

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "@/components/courses/courseCard";
import "swiper/css/bundle";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CoursesContent } from "@/public/types/CoursesContent";
import CourseCardContent from "./CourseCardContent";

type Props = {
  content: CoursesContent[];
};

function CoursesCarousel({ content }: Props) {
  return (
    <section className="max-w-7xl mx-auto w-full relative">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {content.map((course) => {
          return (
            <SwiperSlide className="pb-16" key={course.crsno}>
              <CourseCard
                area={course.category}
                title={course.title}
                url={`https://corsi.laborformazione.it/corsi/online/?&corso=${course.crsno}`}
                price={course.price}
                variant={
                  course.category == "cybersecurity" ? "gulf" : "default"
                }
                imageUrl={course.image}>
                <CourseCardContent
                  date={course.date}
                  language={course.language}
                  duration={course.duration}
                  type={course.type}
                  variant={
                    course.category == "cybersecurity" ? "gulf" : "default"
                  }
                />
              </CourseCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default CoursesCarousel;
