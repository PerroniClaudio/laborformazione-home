import React from "react";
import { Separator } from "./ui/separator";
import CircularButton from "./ui/circularButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

type Props = {};

function TopBar({}: Props) {
  return (
    <nav className="bg-primary w-full">
      <div className="flex items-center justify-end h-12 p-2 gap-1 max-w-7xl mx-auto">
        <Separator orientation="vertical" className="bg-white mr-2" />
        <Link href="https://www.instagram.com/laborproject_srl/" target="_blank">
          <CircularButton variant="white">
            <FaInstagram />
          </CircularButton>
        </Link>
        <Link href="https://www.facebook.com/LaborProjectSrl/" target="_blank">
          <CircularButton variant="white">
            <FaFacebookF />
          </CircularButton>
        </Link>
        <Link href="https://www.linkedin.com/company/labor-project-srl/" target="_blank">
          <CircularButton variant="white">
            <FaLinkedinIn />
          </CircularButton>
        </Link>
        <Link href="https://www.youtube.com/@LaborProjectsrl" target="_blank">
          <CircularButton variant="white">
            <FaYoutube />
          </CircularButton>
        </Link>
      </div>
    </nav>
  );
}

export default TopBar;
