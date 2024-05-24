"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Button } from "./ui/button";

type Props = {};

function MobileNavLinks({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 p-4 bg-secondary rounded">
      <Link href="https://corsi.laborformazione.it/login/"><Button className="w-full">Login</Button></Link>
      <Link href="https://corsi.laborformazione.it/register/"><Button className="w-full">Registrati</Button></Link>
      <Link href="/" className="p-2 font-bold">
        Home
      </Link>
      <div className="w-full">
        <button
          className="w-full p-2 font-bold text-left flex justify-between items-center"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}>
          <span>Corsi di formazione</span> {!isMenuOpen && <FaChevronUp />}
          {isMenuOpen && <FaChevronDown />}
        </button>

        {isMenuOpen && (
          <div className="flex flex-col gap-2 pl-4">
            <Link
              className="font-semibold text-primary"
              href="https://corsi.laborformazione.it/aree-formative/?pagina=privacy">
              Area Privacy
            </Link>
            <Link
              className="font-semibold text-primary"
              href="https://corsi.laborformazione.it/aree-formative/?pagina=legale">
              Area Legale
            </Link>
            <Link
              className="font-semibold text-primary"
              href="https://corsi.laborformazione.it/aree-formative/?pagina=cybersecurity">
              Cybersecurity
            </Link>
            <Link
              className="font-semibold text-primary"
              href="https://corsi.laborformazione.it/aree-formative/?pagina=artificialintelligence">
              Intelligenza Artificiale
            </Link>
          </div>
        )}
      </div>

      <Link href="https://corsi.laborformazione.it/docenti/" className="p-2 font-bold">
        Docenti
      </Link>
      <Link href="https://corsi.laborformazione.it/contatti/" className="p-2 font-bold">
        Contatti
      </Link>
    </div>
  );
}

export default MobileNavLinks;
