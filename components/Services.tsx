"use client";

import { ReactElement, SVGProps } from "react";
import { Divider } from "@nextui-org/react";

export default function Services() {
  return (
    <>
      <section className="-section -center">
        <div className="max-w-7xl max-lg:flex-col max-lg:mt-0 mt-20 flex gap-10 justify-between items-start">
          <div className="w-full max-w-xs flex flex-col gap-y-5 items-start">
            <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
              What We Do
            </span>
            <h1 className="-h1">Safe & Reliable Cargo Solutions</h1>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex gap-x-16 max-md:flex-col max-md:gap-y-5">
              <Card
                comp={<BoatIcon />}
                name="Sea Transport Services"
                description="Wherever your cargo is going, we can arrange the shipment for you and remain competitive with the business market."
              />
              <Card
                comp={<HousesIcon />}
                name="Warehousing Services"
                description="We have buildings that can provide you with distribution, storage, inventory management, order fulfilment services."
              />
            </div>
            <div className="flex gap-x-16 max-md:flex-col max-md:gap-y-5">
              <Card
                comp={<FlightIcon />}
                name="Air Fright Services"
                description="We're partners with airlines and freight forwarders to offer seamless air freight solutions to the clients all over the world."
              />
              <Card
                comp={<TruckIcon />}
                name="Local Shipping Services"
                description="We work close with strategic partners to ensure our domestic trucking offers clients everything they need in their place."
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

export function BoatIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m3.95 19l-1.9-6.7q-.075-.3.063-.7t.587-.55L4 10.6V6q0-.825.588-1.412T6 4h3V2q0-.425.288-.712T10 1h4q.425 0 .713.288T15 2v2h3q.825 0 1.413.588T20 6v4.6l1.3.45q.525.2.625.588t.025.662l-1.9 6.7q-1 0-1.85-.387t-1.55-.988q-.275-.275-.65-.275t-.65.275q-.7.6-1.55.988T12 19q-.25 0-.475-.025t-.45-.075q-.725-.15-1.375-.525T8.5 17.5q-.2-.2-.513-.2t-.512.2q-.7.675-1.625 1.088T3.95 19M12 23q-1.025 0-2.037-.25T8 22q-.95.5-1.95.75T4 23H3q-.425 0-.713-.288T2 22t.288-.712T3 21h1q.9 0 1.8-.25t1.675-.725q.25-.15.525-.15t.525.15q.55.35 1.263.575t1.362.3q.2.025.425.038t.425.012q.9 0 1.8-.225t1.675-.7q.25-.15.525-.15t.525.15q.775.5 1.675.738T20 21h1q.425 0 .713.288T22 22t-.288.713T21 23h-1q-1.05 0-2.05-.25T16 22q-.95.5-1.963.75T12 23M6 9.95l5.375-1.75q.3-.1.625-.1t.625.1L18 9.95V6H6zM12 17q.75 0 1.4-.413t1.15-.962q.6-.65 1.475-.638t1.45.663q.275.275.55.537t.625.463l1.1-4L12 10.1l-7.8 2.55l1.15 3.95q.325-.2.6-.425t.55-.5q.625-.65 1.513-.663t1.487.638q.35.375.75.713t.9.512q.2.075.413.1T12 17m-.025-3.45"
      ></path>
    </svg>
  );
}

export function HousesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 19v-7.375L3 12.4q-.35.25-.75.2t-.65-.4t-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3l9 6.875q.325.25.375.65t-.2.75q-.25.325-.65.375t-.725-.2L20 11.625V19q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19m2 0h12v-8.9l-6-4.575L6 10.1zm2-4q.425 0 .713-.288T9 14t-.288-.712T8 13t-.712.288T7 14t.288.713T8 15m4 0q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m4 0q.425 0 .713-.288T17 14t-.288-.712T16 13t-.712.288T15 14t.288.713T16 15M6 19h12z"
      ></path>
    </svg>
  );
}

export function FlightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20 21H4q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21M5.3 12.4l4.8-1.3l-3.475-5.9q-.2-.35-.075-.75t.55-.525l.425-.125q.225-.075.45-.025t.4.2L14.85 9.8l5-1.35q.8-.225 1.45.3t.65 1.4q0 .55-.337.975t-.863.575L5.575 15.8q-.325.1-.625-.025t-.475-.425L2.45 11.9q-.175-.275-.038-.575t.463-.35l.375-.075q.15-.025.275.013t.25.137z"
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
