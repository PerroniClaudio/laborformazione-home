import React from "react";
import { CoursesContent } from "@/public/types/CoursesContent";
import CourseCardContent from "./CourseCardContent";
import CourseCard from "./courseCard";

type Props = {
  content: CoursesContent[];
};

function VerticalCoursesCarousel({ content }: Props) {
  return (
    <div className="flex flex-col">
      {content.map((course) => (
        <CourseCard
          key={course.crsno}
          area={course.category}
          title={course.title}
          url={`https://corsi.laborformazione.it/corsi/online/?&corso=${course.crsno}`}
          price={course.price}
          variant={course.category == "cybersecurity" ? "gulf" : "default"}
          imageUrl={course.image}>
          <CourseCardContent
            date={course.date}
            language={course.language}
            duration={course.duration}
            type={course.type}
            variant={course.category == "cybersecurity" ? "gulf" : "default"}
          />
        </CourseCard>
      ))}
    </div>
  );
}

export default VerticalCoursesCarousel;
