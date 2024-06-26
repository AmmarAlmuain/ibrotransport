export default function Main() {
  return (
    <>
      <section className="w-full min-h-[70vh] -center">
        <video
          autoPlay
          loop
          muted
          playsInline
          rev="true"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            position: "absolute",
          }}
        >
          <source src="/homeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-30 max-sm:mt-20 flex justify-start w-full max-w-6xl flex-col">
          <div className="w-full max-w-lg p-5 flex flex-col gap-y-5">
            <h1 className="-h1 text-white max-sm:text-2xl">
              Ein neues Kapitel beginnt Ihr Umzug, mühelos und Sorgenfrei
            </h1>
            <p className="text-white">
              Ihr Vertrauen ist unser Antrieb, und Ihre Zufriedenheit unser
              Versprechen – bei jedem Schritt, auf jeder Etage, zu jeder Zeit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
