import AltaFormazione from "@/components/altaFormazione";
import CourseSection from "@/components/courses/courseSection";
import DiconoSection from "@/components/dicono/diconoSection";
import Hero from "@/components/hero";
import NostriNumeri from "@/components/nostriNumeri";
import PercorsiFormativi from "@/components/percorsiFormativi";

export default function Home() {
  return (
    <>
      <Hero />
      <AltaFormazione />
      <PercorsiFormativi />
      <NostriNumeri />
      <CourseSection />
      <DiconoSection />
    </>
  );
}
