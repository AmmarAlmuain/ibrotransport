import Image from "next/image";
import privateRelocation from "@/assets/images/private-relocation.jpg";
import privateRelocation2 from "@/assets/images/private-relocation-2.jpg";
import privateRelocation3 from "@/assets/images/private-relocation-3.jpg";
import privateRelocation4 from "@/assets/images/private-relocation-4.jpg";
import { Reach } from "@/components/Reach";
import Footer from "@/components/Footer";

export default function nh() {
  return (
    <>
      <main className="w-full min-h-[70vh] -center">
        <Image
          src={privateRelocation}
          alt="private rellocation image"
          className="w-full h-[70vh] object-cover absolute"
        />
        <div className="relative z-30 max-sm:mt-20 flex justify-start w-full max-w-6xl flex-col">
          <div className="w-full max-w-lg p-5 flex flex-col gap-y-5">
            <div>
              <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/50">
                assembly
              </span>
            </div>
            <h1 className="-h1 text-white max-sm:text-2xl drop-shadow">
              Montage
            </h1>
          </div>
        </div>
      </main>

      <div className="bg-gray-50 text-gray-600 px-6 lg:px-8 pt-12 pb-20">
        <div className="max-w-screen-lg mx-auto space-y-20 md:space-y-16 ">
          <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
            <div className="rounded-lg md:order-1">
              <Image
                src={privateRelocation2}
                alt="private relocation 2 image"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:order-2">
              <h3 className="font-semibold text-lg lg:text-xl mb-2">
                Montage in Linz, Wels, Graz, Salzburg und ganz Österreich
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Unsere erfahrenen Fachkräfte meistern jede Montageaufgabe mit
                  Präzision und Sorgfalt, von einfachen Regalen bis hin zu
                  komplexen Möbelstücken. Wir setzen modernste Werkzeuge ein und
                  beraten Sie zur optimalen Platzierung Ihrer Einrichtung, um
                  Funktionalität und Ästhetik Ihres Raumes zu maximieren. Unser
                  Ziel ist es, Ihnen einen stressfreien Einzug zu ermöglichen
                  und sofort ein Gefühl von Zuhause zu schaffen.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-10 md:space-x-reverse md:space-y-0">
            <div className="rounded-lg md:order-2">
              <Image
                src={privateRelocation3}
                alt="private relocation 3 image"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:order-1">
              <h3 className="font-semibold text-lg lg:text-xl mb-2">
                Montage von IbroTransport
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  In ganz Österreich, einschließlich Linz, Graz, Salzburg und
                  Oberösterreich, bieten wir einen umfassenden Montageservice,
                  der sich durch Qualität und Effizienz auszeichnet. Wir
                  behandeln jedes Projekt individuell und sorgen mit unserem
                  Know-how dafür, dass Ihre Möbel perfekt montiert werden, ohne
                  Schäden an Eigentum oder Einrichtungsgegenständen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
