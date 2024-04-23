"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Plans() {
  return (
    <section className="plans-container w-full p-20 flex-wrap gap-y-8 px-4 min-h-screen gap-x-6 flex justify-center items-center">
      <div className="w-full -center flex-col gap-y-5">
        <span className="text-white text-center drop-shadow-sm px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
          Preis
        </span>
        <h1 className="-h1 text-center">Unser bester Preis</h1>
      </div>
      <Plan
        name="Basic"
        price="€39"
        list={[
          "Double Truck",
          "Full Insurance",
          "500 Km",
          "Real-time rate shopping",
        ]}
      />
      <Plan
        name="Standard"
        price="€59"
        list={[
          "Double Truck",
          "Full Insurance",
          "1000 Km",
          "Real-time rate shopping",
        ]}
      />
      <Plan
        name="Prämie"
        price="€89"
        list={[
          "Double Truck",
          "Full Insurance",
          "Unlimited Km",
          "Real-time rate shopping",
        ]}
      />
    </section>
  );
}

export function Plan({
  name,
  price,
  list,
}: {
  name: string;
  price: string;
  list: string[];
}) {
  return (
    <div className="plan-card mt-10 w-96 min-h-full group gap-y-12 hover:bg-blueRuin -td py-16 max-md:w-full relative bg-gray-100 flex flex-col justify-around items-center">
      <div className="flex flex-col gap-y-5 justify-center items-center">
        <span className="text-3xl font-semibold group-hover:text-white -td">
          {name}
        </span>
        <span className="text-7xl font-bold flex gap-x-1 group-hover:text-white justify-center items-end leading-none">
          {price}
          <span className="text-xl font-normal group-hover:text-white -td">
            /stunde
          </span>
        </span>
      </div>
      <ul className="flex flex-col justify-center items-center">
        {list.map((item) => {
          return (
            <div
              key={item}
              className="py-4 w-full border-t border-gray-200/40 flex gap-x-4 justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  className="group-hover:text-white"
                  d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                ></path>
              </svg>
              <span className="group-hover:text-white -td">{item}</span>
            </div>
          );
        })}
      </ul>
      <Link href={"#reach"}>
        <Button
          className="bg-coarseWool text-white group-hover:text-coarseWool group-hover:bg-white -td"
          size="lg"
          radius="none"
        >
          Terminbuchung
        </Button>
      </Link>
    </div>
  );
}
