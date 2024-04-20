"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@nextui-org/react";
import germany from "@/assets/images/germany.jpg";

export default function Work() {
  return (
    <>
      <section className="-section h-full gap-y-10 flex flex-col justify-center items-center">
        <h1 className="-h1 text-center">Transporting Across The World</h1>
        <div className="flex gap-x-5 gap-y-5 justify-start max-sm:justify-center flex-wrap">
          <Card img={germany} name="Germany" />
          <Card img={germany} name="Germany" />
          <Card img={germany} name="Germany" />
          <Card img={germany} name="Germany" />
          <Card img={germany} name="Germany" />
        </div>
      </section>
      <div className="h-[40vh] pt-10 -center bg-gray-100 -mt-40 w-full">
        <Button className="w-full max-w-xs" color="primary" radius="none">
          Learn More
        </Button>
      </div>
    </>
  );
}

export function Card({ img, name }: { img: StaticImageData; name: string }) {
  return (
    <div className="w-[270px] h-[354px] before:bg-gradient-to-t before:via-transparent before:from-coarseWool to-transparent before:left-0 before:w-full before:h-full relative before:absolute before:bottom-0 flex flex-col justify-end">
      <Image
        src={img}
        alt="work image"
        className="object-cover w-full h-full"
      />
      <div className="absolute flex-col flex pb-5 pr-5 pl-5">
        <span className="text-white font-medium text-2xl z-10">
          Services to
        </span>
        <span className="text-blue-500 font-medium z-10">{name} Country</span>
      </div>
    </div>
  );
}