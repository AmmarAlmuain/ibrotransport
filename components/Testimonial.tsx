"use client";

import Image from "next/image";
import testimonial from "@/assets/images/testimonial.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import { SVGProps } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

export default function Testimonial() {
  return (
    <>
      <section className="w-full gap-y-5 flex-col flex mt-20 bg-gray-100 max-md:px-0 p-20">
        <div className="w-full flex justify-start max-md:justify-center max-md:text-center items-center">
          <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
            Zeugnis
          </span>
        </div>
        <div className="w-full flex mb-5 max-md:justify-center max-md:text-center justify-start items-center">
          <h1 className="-h1">Was unsere Kunden sagen</h1>
        </div>
        <div className="w-full flex max-xl:flex-col">
          <div className="testimonial-card w-full">
            <div className="p-20 max-sm:p-5 flex flex-col gap-y-5 bg-white">
              <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-y-5 justify-between items-center">
                <div className="flex items-center max-sm:order-2 gap-x-5">
                  <Image
                    src={testimonial}
                    alt="testimonial image"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-xl">Your Name</span>
                    <span>Your Company</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full max-sm:order-1 -center bg-blueRuin">
                  <QuotesIcon />
                </div>
              </div>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                totam natus ducimus omnis deleniti dolor distinctio ad minima in
                similique beatae, molestias nulla, excepturi aut sapiente.
                Sapiente laborum asperiores sed.
              </p>
              <Rating value={4} itemStyles={myStyles} className="max-w-40" />
            </div>
          </div>
          <div className="testimonial-card w-full">
            <div className="p-20 max-sm:p-5 flex flex-col gap-y-5 bg-blueRuin">
              <div className="flex justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-5 items-center">
                <div className="flex items-center max-sm:order-2 gap-x-5">
                  <Image
                    src={testimonial2}
                    alt="testimonial image"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-xl text-white">
                      Your Name
                    </span>
                    <span className=" text-white">Your Company</span>
                  </div>
                </div>
                <div className="w-16 h-16 max-sm:order-1 rounded-full -center bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FF6600"
                      d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179m-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.323 3.17 10.842 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="font-light text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                porro accusantium laudantium odit expedita earum, consequuntur
                dolorem quaerat! Vero iusto, expedita corrupti cupiditate modi
                dicta fugit quasi iste at in?
              </p>
              <Rating value={5} itemStyles={myStyles} className="max-w-40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function QuotesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179m-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.323 3.17 10.842 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"
      ></path>
    </svg>
  );
}
