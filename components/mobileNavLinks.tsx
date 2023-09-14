"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type Props = {};

function MobileNavLinks({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 p-4 bg-secondary rounded">
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
              href="https://laborformazione.it/aree-formative/?pagina=privacy">
              Area Privacy
            </Link>
            <Link
              className="font-semibold text-primary"
              href="https://laborformazione.it/aree-formative/?pagina=legale">
              Area Legale
            </Link>
            <Link
              className="font-semibold text-primary"
              href="https://laborformazione.it/aree-formative/?pagina=cybersecurity">
              Cybersecurity
            </Link>
          </div>
        )}
      </div>

      <Link href="/" className="p-2 font-bold">
        Docenti
      </Link>
      <Link href="/" className="p-2 font-bold">
        Contatti
      </Link>
    </div>
  );
}

export default MobileNavLinks;
