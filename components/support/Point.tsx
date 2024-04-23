import { ReactElement } from "react";

export default function Point({
  comp,
  name,
}: {
  comp: ReactElement;
  name: string;
}) {
  return (
    <>
      <div className="point-card flex justify-start max-md:flex-col max-md:justify-center max-md:items-start items-center gap-5">
        <div className="min-w-16 min-h-16 rounded-full bg-blueRuin -center">
          {comp}
        </div>
        <div>
          <span className="text-lg font-medium">{name}</span>
        </div>
      </div>
    </>
  );
}
