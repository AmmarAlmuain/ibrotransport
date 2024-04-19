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
                  Why Us
                </span>
              </div>
              <h1 className="-h1">
                We Provide Full Range Global Logistics Solution
              </h1>
              <p className="font-light">
                We strive to understand what they’re going through, what they
                need, what their price points are, and what’s important to them
                and their customers.
              </p>
              <p className="font-light">
                We historically build meaningful relationships with our
                customers. We connect with our customers. We care.
              </p>
              <Point comp={<BoxIcon />} name={"Delivery on Time"} />
              <Point comp={<CreditCardIcon />} name={"Optimized Travel Cost"} />
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
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M5 8v11h14V8h-3v6.375q0 .575-.475.863t-.975.037L12 14l-2.55 1.275q-.5.25-.975-.038T8 14.376V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zM10 8v4.75l2-1l2 1V8zM5 8h14z"
      ></path>
    </svg>
  );
}

export function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6M4 8h16V6H4zm0 4v6h16v-6zm0 6V6z"
      ></path>
    </svg>
  );
}
