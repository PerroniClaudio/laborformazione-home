import React from "react";
import { Separator } from "./ui/separator";
import CircularButton from "./ui/circularButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

type Props = {};

function TopBar({}: Props) {
  return (
    <nav className="bg-primary w-full">
      <div className="flex items-center justify-end h-12 p-2 gap-1 max-w-7xl mx-auto">
        <Separator orientation="vertical" className="bg-white mr-2" />
        <CircularButton variant="white">
          <FaInstagram />
        </CircularButton>
        <CircularButton variant="white">
          <FaFacebookF />
        </CircularButton>
        <CircularButton variant="white">
          <FaLinkedinIn />
        </CircularButton>
        <CircularButton variant="white">
          <FaYoutube />
        </CircularButton>
      </div>
    </nav>
  );
}

export default TopBar;
