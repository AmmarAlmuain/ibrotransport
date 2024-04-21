"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/support/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function nh() {
  return (
    <>
      <DynamicMap />
    </>
  );
}
