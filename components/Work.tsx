"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@nextui-org/react";
import vienna from "@/assets/images/vienna.jpg";
import graz from "@/assets/images/graz.jpg";
import linz from "@/assets/images/linz.jpg";
import salzburg from "@/assets/images/salzburg.jpg";
import innsbruck from "@/assets/images/innsbruck.jpg";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section className="-section h-full gap-y-10 flex flex-col justify-center items-center">
        <h1 className="-h1 text-center">Transport in ganz Österreich</h1>
        <div className="flex gap-x-5 gap-y-5 justify-start max-sm:justify-center flex-wrap">
          <Card
            img={linz}
            name="Linz"
            href={"https://en.wikipedia.org/wiki/Linz"}
          />
          <Card
            img={salzburg}
            name="Salzburg"
            href={"https://en.wikipedia.org/wiki/Salzburg"}
          />
          <Card
            img={vienna}
            name="Vienna"
            href={"https://en.wikipedia.org/wiki/Vienna"}
          />
          <Card
            img={graz}
            name="Graz"
            href={"https://en.wikipedia.org/wiki/Graz"}
          />
          <Card
            img={innsbruck}
            name="Innsbruck"
            href={"https://en.wikipedia.org/wiki/Innsbruck"}
          />
        </div>
      </section>
      <div className="h-[40vh] pt-10 -center bg-gray-100 -mt-40 w-full">
        <Link href={"/about-us"} className="w-full -center max-w-xs">
          <Button className="w-full max-w-xs" color="primary" radius="none">
            Lern mehr
          </Button>
        </Link>
      </div>
    </>
  );
}

export function Card({
  img,
  name,
  href,
}: {
  img: StaticImageData;
  name: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="work-card w-[250px] group overflow-hidden h-[354px] before:z-40 before:bg-gradient-to-t before:via-transparent before:from-coarseWool to-transparent before:left-0 before:w-full before:h-full relative before:absolute before:bottom-0 flex flex-col justify-end">
        <Image
          src={img}
          alt="work image"
          className="object-cover group-hover:scale-110 -td w-full h-full"
        />
        <div className="absolute flex-col flex pb-5 pr-5 pl-5">
          <span className="text-white font-medium z-50">
            Unsere Leistungen in
          </span>
          <span className="text-blue-500 text-lg font-medium z-50">
            {name} Stadt
          </span>
        </div>
      </div>
    </Link>
  );
}
