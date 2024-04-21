"use client";

import { ReactElement, SVGProps } from "react";
import { Divider } from "@nextui-org/react";

export default function Services() {
  return (
    <>
      <section className="-section -center">
        <div className="max-w-7xl max-lg:flex-col max-lg:mt-0 mt-20 flex gap-16 justify-between items-start">
          <div className="w-full max-w-xs flex flex-col gap-y-5 items-start">
            <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
              Unsere Leistungen
            </span>
            <h1 className="font-bold text-[30px]">
              Effiziente und sichere Transportlösungen
            </h1>
          </div>
          <div className="flex flex-col gap-y-16">
            <div className="flex gap-x-16 max-md:flex-col max-md:gap-y-5">
              <div className="flex justify-start max-sm:flex-col max-sm:gap-y-5 items-start w-full max-w-96 h-full">
                <div className="flex-col -center">
                  <div>{<BoxIcon />}</div>
                  <div className="flex">
                    <div>{<BoxIcon />}</div>
                    <div>{<BoxIcon />}</div>
                  </div>
                </div>
                <div className="h-24 max-sm:hidden">
                  <Divider orientation="vertical" className="mx-5" />
                </div>
                <div className="flex flex-col gap-y-2.5">
                  <h1 className="text-xl font-medium -td hover:text-blueRuin cursor-pointer">
                    Firmentransport
                  </h1>
                  <p>
                    Wir transportieren Ihre Güter vom Firmenstandort zum
                    Zielort, den Sie erreichen möchten. Wir transportieren Ihre
                    Güter österreichweit Mit uns garantieren Sie Schnelligkeit
                    und Zugangssicherheit
                  </p>
                </div>
              </div>

              <Card
                comp={<TruckIcon />}
                name="Privat transport"
                description="Wir transportieren Ihre Sachen von zu Hause zum gewünschten Zielort. Wir transportieren Ihre Güter österreichweit Mit uns garantieren Sie Schnelligkeit und Zugangssicherheit"
              />
            </div>
            <div className="flex gap-x-16 max-md:flex-col max-md:gap-y-5">
              <Card
                comp={<BuildingIcon />}
                name="Firmenumzug"
                description="Wir transportieren die Firmenmöbel und alles, was Sie brauchen, an Ihren neuen Standort. Wir ziehen Ihr Unternehmen österreichweit um Mit uns garantieren Sie Schnelligkeit und Zugangssicherheit"
              />
              <Card
                comp={<HousesIcon />}
                name="Privatumzug"
                description="Wir transportieren Ihre Möbel und alles, was Sie brauchen, an Ihren neuen Standort. Wir transportieren Sie in ganz Österreich zu Ihrem neuen Zuhause Mit uns garantieren Sie Schnelligkeit und Zugangssicherheit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Card({
  comp,
  name,
  description,
}: {
  comp: ReactElement;
  name: string;
  description: string;
}) {
  return (
    <>
      <div className="flex justify-start max-sm:flex-col max-sm:gap-y-5 items-start w-full max-w-96 h-full">
        <div>{comp}</div>
        <div className="h-24 max-sm:hidden">
          <Divider orientation="vertical" className="mx-5" />
        </div>
        <div className="flex flex-col gap-y-2.5">
          <h1 className="text-xl font-medium -td hover:text-blueRuin cursor-pointer">
            {name}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#006fe0"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  );
}

export function HousesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#006fe0"
      className="w-12 h-12"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

export function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#006fe0"
        d="M11 19.425v-6.85L5 9.1v6.85zm2 0l6-3.475V9.1l-6 3.475zm-2 2.3L4 17.7q-.475-.275-.737-.725t-.263-1v-7.95q0-.55.263-1T4 6.3l7-4.025Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725t.262 1v7.95q0 .55-.262 1T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275m5-13.2l1.925-1.1L12 4l-1.95 1.125zm-4 2.325l1.95-1.125L8.025 6.3l-1.95 1.125z"
      ></path>
    </svg>
  );
}

export function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#006fe0"
        d="M7 21q-1.25 0-2.125-.875T4 18H3q-.825 0-1.412-.587T1 16v-3q0-.825.588-1.412T3 11h9V7q0-.825.588-1.412T14 5h2V4q0-.425.288-.712T17 3h1q.425 0 .713.288T19 4v1h.55q.65 0 1.175.375t.725 1l1.45 4.3q.05.15.075.313t.025.337V16q0 .825-.587 1.413T21 18h-1q0 1.25-.875 2.125T17 21t-2.125-.875T14 18h-4q0 1.25-.875 2.125T7 21m0-2q.425 0 .713-.288T8 18t-.288-.712T7 17t-.712.288T6 18t.288.713T7 19m10 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19M3 13v3h1.775q.425-.475 1-.737T7 15t1.225.263t1 .737H12v-3zm11 3h.775q.425-.475 1-.737T17 15t1.225.263t1 .737H21v-3h-7zm0-5h6.9l-1.35-4H14zM2 8.5v-2h-.25q-.325 0-.537-.213T1 5.75t.213-.537T1.75 5h8.5q.325 0 .538.213T11 5.75t-.213.538t-.537.212H10v2h.25q.325 0 .538.213T11 9.25t-.213.538t-.537.212h-8.5q-.325 0-.537-.213T1 9.25t.213-.537t.537-.213zm1.5 0h1.75v-2H3.5zm3.25 0H8.5v-2H6.75zM3 13h9zm11 0h7z"
      ></path>
    </svg>
  );
}
