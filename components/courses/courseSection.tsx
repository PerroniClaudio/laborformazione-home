import { getCorsi } from "@/sanity/sanity-utils";
import React from "react";
import CoursesCarousel from "@/components/courses/CoursesCarousel";
import Heading from "../ui/heading";
import VerticalCoursesCarousel from "./verticalCoursesCarousel";

type Props = {};

async function CourseSection({}: Props) {
  const content = await getCorsi();

  return (
    <section>
      <section className="w-full flex flex-col gap-2 items-center justify-center p-4 lg:p-8">
        <h3 className="hidden lg:block text-xl">CORSI DI ALTA FORMAZIONE</h3>
        <Heading
          content="I NOSTRI CORSI DI PUNTA"
          className="text-primary text-center text-4xl lg:text-6xl font-semibold"
        />
        <h3 className="block lg:hidden text-lg">CORSI DI ALTA FORMAZIONE</h3>
      </section>
      <section className="hidden lg:block">
        <CoursesCarousel content={content} />
      </section>
      <section className="block lg:hidden">
        <VerticalCoursesCarousel content={content} />
      </section>
    </section>
  );
}

export default CourseSection;
