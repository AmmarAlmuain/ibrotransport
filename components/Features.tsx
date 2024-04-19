import { SVGProps } from "react";
import Point from "./support/Point";
import Image from "next/image";
import feature from "@/assets/images/feature.jpg";

export default function Features() {
  return (
    <>
      <section className="my-20 w-full h-full max-xl:flex-col min-h-screen flex justify-center items-center">
        <div className="w-full min-h-screen max-xl:min-h-[50vh] flex justify-center relative items-center bg-blueRuin">
          <div className="max-xl:w-full flex justify-center translate-x-10 max-xl:translate-x-0">
            <div className="relative max-xl:p-5 max-w-5xl max-xl:pb-0 bg-gray-100 h-full w-full -center">
              <Image
                src={feature}
                alt="feature image"
                className="object-cover w-full object-top max-xl:h-[50vh]"
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen max-xl:p-20 bg-gray-100 -center">
          <div className="max-w-xl h-full flex flex-col justify-center items-start gap-y-5">
            <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/20">
              Why Choose
            </span>
            <h1 className="-h1">
              We Create An Opportunity To Reach Business Potential
            </h1>
            <p className="font-light">
              Logistics is a distinguished supply chain management firm which
              provides comprehensive solutions for warehousing, transportation
              and a host of logistics services.
            </p>
            <div className="flex gap-x-10 max-sm:flex-col gap-y-5">
              <div className="flex flex-col gap-y-5">
                <Point comp={<BoxIcon />} name="Safe Package" />
                <Point comp={<GlobeIcon />} name="Global Tracking" />
                <Point comp={<AlarmIcon />} name="In Time Delivery" />
              </div>
              <div className="flex flex-col gap-y-5">
                <Point comp={<HeadsetMicIcon />} name="24/7 Support" />
                <Point comp={<ShippingIcon />} name="Ship Everywere" />
                <Point comp={<CreditCardIcon />} name="Transparent Pricing" />
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

export function ShippingIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6 20q-1.25 0-2.125-.875T3 17H2q-.425 0-.712-.288T1 16V6q0-.825.588-1.412T3 4h12q.825 0 1.413.588T17 6v2h2q.475 0 .9.213t.7.587l2.2 2.925q.1.125.15.275t.05.325V16q0 .425-.288.713T22 17h-1q0 1.25-.875 2.125T18 20t-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20m0-2q.425 0 .713-.288T7 17t-.288-.712T6 16t-.712.288T5 17t.288.713T6 18m-3-3h.8q.425-.45.975-.725T6 14t1.225.275T8.2 15H15V6H3zm15 3q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18m-1-5h4.25L19 10h-2zm-8-2.5"
      ></path>
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.8 20.025q-.825 0-1.412-.6T9.8 18t.588-1.412T11.8 16l.6-.575q.2-.2.463-.312T13.4 15q.575 0 .988.425t.412 1v.425q0 .5.325.825t.825.325q.375 0 .675-.225t.425-.575l.3-.825q.225-.6.725-.987t1.15-.388q.275-.7.438-1.45t.162-1.55q0-2.225-1.112-4.062T15.8 5.05V6q0 .825-.587 1.413T13.8 8h-1v2q0 .425-.288.713T11.8 11h-1v1.7q0 .55-.375.925T9.5 14q-.35 0-.638-.15t-.462-.425L6.8 11h-1v1q0 .775-.525 1.325t-1.25.65q.65 2.6 2.813 4.325t4.962 1.725m2-6.025q-.425 0-.712-.287T12.8 13t.288-.712T13.8 12h1q.425 0 .713.288T15.8 13t-.288.713T14.8 14zm2.325-3q-.5 0-.788-.387T15.2 9.75l.375-1.1q.1-.3.35-.475t.55-.175q.5 0 .788.388t.137.862l-.375 1.1q-.1.3-.35.475t-.55.175M11.8 22q-2.075 0-3.9-.788t-3.175-2.137T2.588 15.9T1.8 12t.788-3.9t2.137-3.175T7.9 2.788T11.8 2t3.9.788t3.175 2.137T21.013 8.1T21.8 12t-.788 3.9t-2.137 3.175t-3.175 2.138t-3.9.787"
      ></path>
    </svg>
  );
}

export function HeadsetMicIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 20q-.825 0-1.412-.587T3 18v-7q0-1.85.713-3.488T5.65 4.65t2.863-1.937T12 2t3.488.713T18.35 4.65t1.938 2.863T21 11v10q0 .825-.587 1.413T19 23h-6q-.425 0-.712-.288T12 22t.288-.712T13 21h6v-1h-2q-.825 0-1.412-.587T15 18v-4q0-.825.588-1.412T17 12h2v-1q0-2.9-2.05-4.95T12 4T7.05 6.05T5 11v1h2q.825 0 1.413.588T9 14v4q0 .825-.587 1.413T7 20zm0-2h2v-4H5zm12 0h2v-4h-2zM5 14h2zm12 0h2z"
      ></path>
    </svg>
  );
}

export function AlarmIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13 12.6V9q0-.425-.288-.712T12 8t-.712.288T11 9v3.975q0 .2.075.388t.225.337l2.8 2.8q.275.275.7.275t.7-.275t.275-.7t-.275-.7zM12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22M2.05 7.3q-.275-.275-.275-.7t.275-.7L4.9 3.05q.275-.275.7-.275t.7.275t.275.7t-.275.7L3.45 7.3q-.275.275-.7.275t-.7-.275m19.9 0q-.275.275-.7.275t-.7-.275L17.7 4.45q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.85 2.85q.275.275.275.7t-.275.7M12 20q2.925 0 4.963-2.037T19 13t-2.037-4.962T12 6T7.038 8.038T5 13t2.038 4.963T12 20"
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

export function SpeedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"
      ></path>
    </svg>
  );
}
