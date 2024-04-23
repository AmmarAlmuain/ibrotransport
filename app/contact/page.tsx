export default function nh() {
  return (
    <>
      <div className="w-full pt-20">
        <div className="p-20 bg-gray-100 flex max-sm:p-0 max-sm:pt-10 flex-col gap-10">
          <div className="max-sm:w-full max-sm:text-center">
            <span className="text-white px-2.5 py-1 border-l-5 border-blueRuin bg-black/50">
              Our Location
            </span>
          </div>
          <h1 className="-h1 max-sm:text-center">Google Map Viewport</h1>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(tokyo%20tower)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}
