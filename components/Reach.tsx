"use client";

import { Select, SelectItem, Input, Textarea, Button } from "@nextui-org/react";
import { SVGProps, useState } from "react";

const sendEmail = async (body: any = {}) => {
  const response = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response;
};

export function Reach() {
  const body: any = {
    workType: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  };
  const [workTypes, setWorkTypes] = useState([
    "Private relocation",
    "Company relocation",
    "Private relocation transport",
    "Company relocation transport",
  ]);
  return (
    <>
      <section
        id="reach"
        className="-section bg-coarseWool lg:flex-row flex-col gap-10 flex justify-evenly "
      >
        <div className="flex flex-col justify-center items-start lg:min-w-72 w-full lg:w-96 gap-y-5">
          <div>
            <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-white/10">
              Kontakt
            </span>
          </div>
          <h1 className="text-white -h1">Nehmen Sie Kontakt mit uns auf</h1>
          <p className="text-white text-sm">
            Wir sind Ihnen dankbar für Ihre Anfrage. Bitte füllen Sie das
            untenstehende Formular aus, und wir werden uns umgehend mit Ihnen in
            Verbindung setzen, um über Ihre Lager- und Distributions-, Luft- und
            Seefracht- oder andere Logistikbedürfnisse zu sprechen.
          </p>
          <div className="flex lg:flex-col gap-5 flex-wrap">
            <div className="flex justify-start items-center gap-x-5">
              <div className="w-16 h-16 rounded-full bg-blueRuin -center">
                <EmailIcon />
              </div>
              <div className="flex flex-col text-sm">
                <span className="text-white">Email</span>
                <span className="hover:text-blueRuin -td cursor-pointer text-white">
                  contact@ibrotransport.com
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div className="w-16 h-16 rounded-full bg-blueRuin -center">
                <PhoneIcon />
              </div>
              <div className="flex flex-col text-sm">
                <span className="text-white">Call Us</span>
                <span className="hover:text-blueRuin -td cursor-pointer text-white">
                  +90 (535) 513 2331
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div className="w-16 h-16 rounded-full bg-blueRuin -center">
                <AlarmIcon />
              </div>
              <div className="flex flex-col text-sm">
                <span className="text-white">Mon - Sat 9.00 - 18.00</span>
                <span className="text-white">Sunday Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-2xl flex flex-col gap-y-5">
          <Select
            label="Arbeitstyp"
            placeholder="Wählen Sie einen Arbeitstyp aus"
            radius="none"
            onChange={(value) => {
              body.workType = value.target.value;
            }}
          >
            {workTypes.map((workType) => (
              <SelectItem key={workType} value={workType}>
                {workType}
              </SelectItem>
            ))}
          </Select>
          <div className="w-full flex gap-x-5">
            <Input
              type="text"
              isRequired
              label="Name"
              radius="none"
              placeholder="Ihr Name"
              onChange={(value) => {
                body.name = value.target.value;
              }}
            />
            <Input
              type="email"
              isRequired
              label="Email"
              radius="none"
              placeholder="deine E-Mail"
              onChange={(value) => {
                body.email = value.target.value;
              }}
            />
          </div>
          <div className="w-full flex gap-x-5">
            <Input
              type="text"
              isRequired
              label="Telefonnummer"
              radius="none"
              placeholder="deine Telefonnummer"
              onChange={(value) => {
                body.phone = value.target.value;
              }}
            />
            <Input
              type="text"
              isRequired
              label="Stadt"
              radius="none"
              placeholder="deine Stadt"
              onChange={(value) => {
                body.city = value.target.value;
              }}
            />
          </div>
          <Textarea
            isRequired
            label="Nachricht"
            placeholder="Ihre Nachricht"
            radius="none"
            onChange={(value) => {
              body.message = value.target.value;
            }}
          />
          <Button
            className="max-w-xs"
            onClick={async () => {
              await sendEmail(body);
            }}
            color="primary"
            radius="full"
          >
            Nachricht abschicken
          </Button>
        </div>
      </section>
    </>
  );
}

export function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        d="m.5 4.5l7 4l7-4m-13-3h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
      ></path>
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        d="M4.72.5H2.5a2 2 0 0 0-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-2.416-1.208a1 1 0 0 0-1.396.578l-.297.893a1.21 1.21 0 0 1-1.385.804A6.047 6.047 0 0 1 3.71 6.547a1.21 1.21 0 0 1 .804-1.385l1.108-.37a1 1 0 0 0 .654-1.19L5.69 1.257A1 1 0 0 0 4.72.5Z"
      ></path>
    </svg>
  );
}

export function AlarmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        d="m.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Z"
      ></path>
    </svg>
  );
}
