import React from "react";
import { FaBookOpen, FaCalendarAlt, FaClock, FaLanguage } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";

type Props = {
  duration?: string;
  date?: string;
  language?: string;
  type: string;
  variant: "default" | "gulf";
};

function CourseCardContent({ duration, date, language, type, variant }: Props) {
  const textClass = variant === "default" ? "text-primary" : "text-gulf-500";

  let formattedDate = "";
  let formattedDateMobile = "";

  if (date) {
    formattedDate = new Date(date).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    formattedDateMobile = new Date(date).toLocaleDateString("it-IT", {
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="flex lg:flex-col gap-2 py-4">
      {duration && (
        <div className="flex flex-row gap-2 items-center text-lg text-gray-400">
          <FaClock />
          <span>{duration}</span>
        </div>
      )}
      {date && (
        <div className="flex flex-row gap-2 items-center text-lg text-gray-400">
          <FaCalendarAlt />
          <span className="hidden lg:block">{formattedDate}</span>
          <span className="block lg:hidden">{formattedDateMobile}</span>
        </div>
      )}
      {language && (
        <div className="hidden lg:flex flex-row gap-2 items-center text-lg text-gray-600">
          <FaLanguage />
          <span>{language}</span>
        </div>
      )}
      {type && (
        <div
          className={`flex flex-row gap-2 items-center text-lg ${textClass}`}>
          {type == "elearning" && (
            <>
              <FaBookOpen />
              <span className="hidden lg:block">E-Learning</span>
            </>
          )}
          {type == "webinar" && (
            <>
              <FaUsersRectangle />
              <span className="hidden lg:block">Webinar</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseCardContent;
