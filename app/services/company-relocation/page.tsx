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
                Company relocation
              </span>
            </div>
            <h1 className="-h1 text-white max-sm:text-2xl drop-shadow">
              Firmenumzugs-Service in ganz Österreich
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
                Firmenumzug in Linz, Wels, Graz, Salzburg und ganz Österreich
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Bei einem Firmenumzug steht viel auf dem Spiel – es geht nicht
                  nur um den physischen Transport von Büromöbeln und
                  -ausstattung, sondern auch um die Minimierung von
                  Betriebsunterbrechungen und die Sicherstellung einer nahtlosen
                  Wiederaufnahme der Geschäftstätigkeit am neuen Standort. Unser
                  Service für Firmenumzüge ist speziell darauf ausgelegt, diese
                  Herausforderungen effizient und professionell zu meistern.
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
                Ihr Firmenumzug mit IbroTransport
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Unser erfahrenes Team plant und koordiniert Ihren Firmenumzug
                  bis ins kleinste Detail, um sicherzustellen, dass jeder Aspekt
                  berücksichtigt wird – von der sorgfältigen Verpackung
                  sensibler IT-Ausrüstung bis hin zur strategischen Zeitplanung,
                  die den Betriebsablauf so wenig wie möglich stört. Wir bieten
                  maßgeschneiderte Lösungen, die auf die spezifischen
                  Bedürfnisse und Anforderungen Ihres Unternehmens zugeschnitten
                  sind, und setzen dabei auf modernste Logistik und ein
                  umfassendes Verständnis für die Herausforderungen von
                  Geschäftsumzügen.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
            <div className="rounded-lg md:order-1">
              <Image
                src={privateRelocation4}
                alt="private relocation 4 image"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex-1 md:order-2">
              <h3 className="font-semibold text-lg lg:text-xl mb-2">
                Firmenumzüge in ganz Österreich
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Mit unserem umfangreichen Netzwerk und unserer Präsenz in ganz
                  Österreich, einschließlich Linz, Graz, Salzburg und
                  Oberösterreich, sind wir in der Lage, Firmenumzüge jeglicher
                  Größe und Komplexität durchzuführen. Vertrauen Sie auf unsere
                  Professionalität und unser Engagement für Exzellenz, um Ihren
                  Firmenumzug so reibungslos und effizient wie möglich zu
                  gestalten. Wir sind Ihr Partner für einen sorglosen Übergang,
                  der es Ihnen ermöglicht, sich voll und ganz auf Ihr
                  Kerngeschäft zu konzentrieren, während wir uns um den Umzug
                  kümmern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
