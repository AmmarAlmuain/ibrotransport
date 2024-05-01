import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="h-ful -center -translate-x-1.5">
        <div className="flex justify-start">
          <div className="h-full flex justify-end flex-col items-center">
            <Link href={"/"} className="cursor-pointer">
              <h1 className="font-bold -center text-2xl text-white max-sm:text-2xl leading-none">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="75"
                    version="1.1"
                    viewBox="0 0 793.701 1122.52"
                  >
                    <g>
                      <path
                        fill="#FF6600"
                        strokeWidth="0.025"
                        d="M405.23 237.877L36.757 472.64l104.385 41.926L405.23 346.31l264.09 168.257 104.384-41.926z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#FF660075"
                        strokeWidth="0.025"
                        d="M405.23 346.31L141.142 514.567v234.765L405.23 581.074zm368.474 126.33l-104.385 41.927v234.765l104.385-41.927z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#FF6600"
                        strokeWidth="0.025"
                        d="M141.142 514.567L36.757 472.641v234.764l104.385 41.927zm528.177 0L405.23 346.31v234.764l264.09 168.258z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <span className="text-blueRuin">Ibro</span>Transport.
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
