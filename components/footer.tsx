import { Separator } from "@/components/ui/separator";
import React from "react";
import Logo from "./ui/logo";
import CircularButton from "./ui/circularButton";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  const anno = new Date().getFullYear();

  return (
    <footer className="relative bg-primary w-full pt-8">
      <div className="bg-secondary p-8 lg:px-16">
        <div className="hidden lg:flex flex-col gap-2 max-w-7xl mx-auto">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-2">
              <div className="flex flex-col gap-8">
                <Logo classname="w-1/2" />
                <div className="text-xs">
                  <p>Labor Project S.r.l. </p>
                  <p>Iscrizione Ufficio Registro Imprese di Como</p>
                  <p>con n. 02725120139</p>
                  <p>Cap. Soc. € 100.000 i.v.</p>
                  <p>P.I. 02725120139</p>
                </div>
                <div className="flex gap-1">
                  <CircularButton variant="primary">
                    <FaInstagram />
                  </CircularButton>
                  <CircularButton variant="primary">
                    <FaFacebook />
                  </CircularButton>
                  <CircularButton variant="primary">
                    <FaLinkedin />
                  </CircularButton>
                  <CircularButton variant="primary">
                    <FaYoutube />
                  </CircularButton>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col">
                <div className="grid grid-cols-4">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-primary font-semibold uppercase">
                        Cantù
                      </p>
                      <p>Via Brianza, 65</p>
                      <p>22063 Cantù (CO)</p>
                      <p>Tel. +39 031 704381</p>
                    </div>
                    <a
                      href="mailto:info@laborproject.it"
                      className="text-primary">
                      info@laborproject.it
                    </a>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-primary font-semibold uppercase">
                        Roma
                      </p>
                      <p>Via Lima, 7</p>
                      <p>00198 Roma (RM)</p>
                    </div>
                    <a
                      href="mailto:roma@laborproject.it"
                      className="text-primary">
                      roma@laborproject.it
                    </a>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-primary font-semibold uppercase">
                        Milano
                      </p>
                      <p>Piazza IV Novembre, 7</p>
                      <p>20124 Milano (MI)</p>
                    </div>
                    <a
                      href="mailto:milano@laborproject.it"
                      className="text-primary">
                      milano@laborproject.it
                    </a>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-primary font-semibold uppercase">
                        LUGANO
                      </p>
                      <p>Privacy Desk Suisse SA</p>
                      <p>Società controllata da Labor Project srl</p>
                      <p>Corso Elvezia, 16</p>
                      <p>6900 Lugano (Svizzera)</p>
                    </div>
                    <a
                      href="mailto:info@privacydesk.ch"
                      className="text-primary">
                      info@privacydesk.ch
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-4">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <img src="bureau.webp" alt="" className="w-48" />
                <img src="cepas.webp" alt="" className="h-32" />
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex justify-between p-4">
            <div className="flex gap-2 h-8 items-center">
              <Separator orientation="vertical" />
              <Link href="/">Privacy Policy</Link>
              <Separator orientation="vertical" />
              <Link href="/">Cookie Policy</Link>
              <Separator orientation="vertical" />
              <Link href="/">Codice Etico</Link>
              <Separator orientation="vertical" />
              <Link href="/">Contatti</Link>
              <Separator orientation="vertical" />
            </div>
            <div>
              <p>Copyright © {anno}. All rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-8 items-center">
            <Logo classname="w-full" />
            <div className="flex gap-1">
              <CircularButton variant="primary">
                <FaInstagram />
              </CircularButton>
              <CircularButton variant="primary">
                <FaFacebook />
              </CircularButton>
              <CircularButton variant="primary">
                <FaLinkedin />
              </CircularButton>
              <CircularButton variant="primary">
                <FaYoutube />
              </CircularButton>
            </div>
          </div>

          <div className="">
            <p>Labor Project S.r.l. </p>
            <p>Iscrizione Ufficio Registro Imprese di Como</p>
            <p>con n. 02725120139</p>
            <p>Cap. Soc. € 100.000 i.v.</p>
            <p>P.I. 02725120139</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-primary font-semibold uppercase">Cantù</p>
                <p>Via Brianza, 65</p>
                <p>22063 Cantù (CO)</p>
                <p>Tel. +39 031 704381</p>
              </div>
              <a href="mailto:info@laborproject.it" className="text-primary">
                info@laborproject.it
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-primary font-semibold uppercase">Roma</p>
                <p>Via Lima, 7</p>
                <p>00198 Roma (RM)</p>
                <a href="mailto:roma@laborproject.it" className="text-primary">
                  roma@laborproject.it
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-primary font-semibold uppercase">LUGANO</p>
                <p>Privacy Desk Suisse SA</p>
                <p>Società controllata da Labor Project srl</p>
                <p>Corso Elvezia, 16</p>
                <p>6900 Lugano (Svizzera)</p>
              </div>
              <a href="mailto:info@privacydesk.ch" className="text-primary">
                info@privacydesk.ch
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-primary font-semibold uppercase">Milano</p>
                <p>Viale Monza, 347</p>
                <p>20126 Milano (MI)</p>
                <a
                  href="mailto:milano@laborproject.it"
                  className="text-primary">
                  milano@laborproject.it
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-1">
              <img src="bureau.webp" alt="" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <img src="cepas.webp" alt="" className="h-32" />
            </div>
          </div>

          <div className="flex gap-2 h-8 items-center text-xs">
            <Separator orientation="vertical" />
            <Link href="/">Privacy Policy</Link>
            <Separator orientation="vertical" />
            <Link href="/">Cookie Policy</Link>
            <Separator orientation="vertical" />
            <Link href="/">Codice Etico</Link>
            <Separator orientation="vertical" />
            <Link href="/">Contatti</Link>
            <Separator orientation="vertical" />
          </div>

          <div className="text-center text-xs">
            <p>Copyright © {anno}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
