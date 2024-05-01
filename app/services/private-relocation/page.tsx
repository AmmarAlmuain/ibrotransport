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
                Privatumzug
              </span>
            </div>
            <h1 className="-h1 text-white max-sm:text-2xl drop-shadow">
              Privatumzugs-Service in ganz Österreich
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
                Umzug in ganz Österreich
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Unser Service für Privatumzüge steht ganz im Zeichen Ihrer
                  persönlichen Bedürfnisse und Wünsche. Wir wissen, dass jeder
                  Umzug einzigartig ist und besondere Aufmerksamkeit erfordert.
                  Unser erfahrenes Team begleitet Sie von der Planung bis zur
                  Ausführung Ihres Umzugs, um sicherzustellen, dass alles
                  reibungslos und ohne Stress verläuft. Wir kümmern uns um alle
                  Aspekte Ihres Umzugs, von der sorgfältigen Verpackung Ihrer
                  Besitztümer bis hin zum sicheren Transport und der
                  fachgerechten Montage Ihrer Möbel am neuen Wohnort.
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
                Einfach Umziehen mit IbroTransport
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Mit unserem umfassenden Dienstleistungsangebot, das sich über
                  ganz Österreich erstreckt, einschließlich Linz, Graz, Salzburg
                  und Oberösterreich, garantieren wir einen effizienten und
                  sorglosen Privatumzug. Wir verstehen, dass Vertrauen und
                  Zuverlässigkeit die Grundlage für einen erfolgreichen Umzug
                  sind, und setzen deshalb auf transparente Kommunikation und
                  individuelle Lösungen, die genau auf Ihre Situation
                  zugeschnitten sind.
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
                Privatumzug in ganz Österreich
              </h3>
              <div className="text-sm lg:text-base">
                <p>
                  Verlassen Sie sich auf unser Engagement für Qualität und
                  Kundenzufriedenheit, um Ihren Privatumzug so angenehm wie
                  möglich zu gestalten. Mit unserer Erfahrung, Professionalität
                  und dem Fokus auf Ihre persönlichen Bedürfnisse sind wir der
                  ideale Partner, um Sie in dieses neue Kapitel Ihres Lebens zu
                  begleiten. Lassen Sie uns gemeinsam Ihren Umzug planen und
                  durchführen, damit Sie sich von Anfang an in Ihrem neuen
                  Zuhause wohl fühlen können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
