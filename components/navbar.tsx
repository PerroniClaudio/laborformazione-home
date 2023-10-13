"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Navlinks from "@/components/navlinks";
import MobileNavLinks from "@/components/mobileNavLinks";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import CircularButton from "@/components/ui/circularButton";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center p-8">
        <Logo classname="w-48" />
        <Navlinks />
        <div className="flex items-center gap-2 font-semibold">
          <Button variant={"secondary"} className="font-extralight text-2xl">
            <CiSearch />
          </Button>
          <Link href="https://corsi.laborformazione.it/login/">
            <Button className="w-24">Login</Button>
          </Link>
          <Link href="https://corsi.laborformazione.it/register/">
            <Button className="w-24">Registrati</Button>
          </Link>
          <CircularButton variant="dark">
            <FaUser />
          </CircularButton>
          <CircularButton variant="dark">
            <FaCartShopping />
          </CircularButton>
        </div>
      </nav>
      <nav className="flex lg:hidden flex-col p-4 gap-4">
        <div className="flex justify-between items-center ">
          <Logo classname="w-2/3" />
          <button
            className="font-extralight text-4xl"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}>
            <HiBars3 />
          </button>
        </div>

        {isMenuOpen && <MobileNavLinks />}
      </nav>
    </>
  );
}

export default Navbar;
