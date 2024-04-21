import { SVGProps } from "react";
import Image from "next/image";

import about from "@/assets/images/about.jpg";
import about2 from "@/assets/images/about-2.jpg";
import about3 from "@/assets/images/about-3.jpg";
import Point from "./support/Point";
about;

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full py-20 min-h-screen flex flex-col justify-center items-center"
      >
        <div className="w-full h-[65vh]">
          <Image
            src={about}
            alt="about image"
            className="w-full h-[65vh] object-cover"
          />
        </div>
        <div className="px-5 max-sm:px-0">
          <div className="w-full flex justify-center max-lg:flex-col items-start gap-x-12 gap-y-5 max-w-6xl max-sm:p-10 p-20 bg-white -mt-32">
            <div className="flex flex-col gap-5 w-full max-w-lg">
              <div>
                <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
                  Über uns
                </span>
              </div>
              <h1 className="-h1">Wir kümmern uns</h1>
              <p className="font-light">
                Ihr Seelenfrieden hat für uns oberste Priorität. Wir hören zu,
                wir verstehen und handeln in Ihrem besten Interesse.
              </p>
              <p className="font-light">
                Denn bei IbroTransport sind wir nicht nur ein Logistikanbieter –
                wir sind Ihr vertrauenswürdiger Partner bei jedem Ihrer
                Schritte.
              </p>
              <Point comp={<BoxIcon />} name={"Pünktliche Lieferung"} />
              <Point comp={<EuroIcon />} name={"Optimierte Transportkosten"} />
            </div>
            <div className="w-full relative max-sm:gap-y-5 max-sm:flex-col max-sm:flex">
              <Image
                src={about2}
                alt="about-2 image"
                className="w-full max-w-md max-sm:max-w-full max-sm:h-full h-[425px] object-cover"
              />
              <div className="w-72 h-56 max-sm:w-full max-sm:h-full max-sm:relative flex justify-start xl:-mb-10 xl:-ml-20 items-end bg-white absolute bottom-0 left-0">
                <Image
                  src={about3}
                  alt="about-3 image"
                  className="w-[90%] h-[87.5%] max-sm:max-w-full max-sm:w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      height="2.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zm-2 2.3L4 17.7q-.475-.275-.737-.725t-.263-1v-7.95q0-.55.263-1T4 6.3l7-4.025Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725t.262 1v7.95q0 .55-.262 1T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275m5-13.2l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"
      ></path>
    </svg>
  );
}

export function EuroIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
