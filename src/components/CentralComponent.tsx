import React, { useState } from "react";

interface CentralComponentProps {
  color1: string;
  color2: string;
}

const CentralComponent: React.FC<CentralComponentProps> = ({
  color1,
  color2,
}) => {
  const [selectedProject, setSelectedProject] = useState<string>("welcome");

  return (
    <div
      className="relative z-[100] flex flex-col justify-start items-start p-0 min-h-[calc(100%-102px)] h-[calc(100%-102px)] md:flex-row md:justify-between md:items-center md:py-[30px] md:pr-0 md:pl-[80px]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Left Section */}
      <div className="relative basis-[53.4752%]">
        <div className="origin-left opacity-100 transition-all duration-200 ease-linear scale-x-100">
          <svg
            id="welcome_svg"
            xmlns="http://www.w3.org/2000/svg"
            width="605.44"
            height="122.24"
            viewBox="0 0 1892 382"
            className="w-[75%] fill-transparent"
          >
            <path
              id="welcome_path"
              style={{
                strokeDasharray: "9541.93, 9541.93",
                strokeDashoffset: "7156",
                transition: "fill 1s ease-in-out 0s",
                stroke: "rgb(204, 204, 204)",
                fill: "rgb(204, 204, 204)",
                animation: "animate 5s linear forwards",
                strokeWidth: "2px",
              }}
              stroke="none"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M673 52h13v286h-13V52ZM21 68h15l11.67 35 25.66 76 31.33 92L121 319c1.18-7.67 5.08-16.57 7.66-24l14.65-42 44.36-127 15.75-45c3.77-10.08 3.22-12.74 9.6-12.98 10.02-.39 8.61 1.39 13.32 14.98l15.33 44 40.99 117L309 319c1.13-7.32 8.11-26.23 10.95-34l14-41 10.74-32 29.98-87 14.66-43c4.29-12.86 3.55-13.88 10.67-14h8l-13.69 40-38.65 113-27.33 80L316 338h-7c-8.14-.05-7.4-.24-12.33-15l-15.34-44-39.99-114L214 87c-1.18 7.63-4.52 14.73-7 22l-15 43-30.31 87-15.27 44-12.75 37c-1.05 3.14-4.63 14.5-6.51 16.4-1.95 1.98-9.36 2.07-11.94 1.31-3.99-1.18-6.58-12.8-7.89-16.71l-16.66-49L21 68Zm570 230c2.38 2.41 7.16 6.17 5.83 10-.99 2.86-6.43 7.08-8.83 9.13-8.01 6.86-18.98 13.19-29 16.54-31.99 10.67-70.69 6.18-98-14.15-17.58-13.08-30.45-33.18-35.5-54.52-3.02-12.77-2.65-24.03-2.5-37 .31-26.02 14.43-53.95 34-70.7 29.18-24.98 77.82-27.22 110-6.76 15.48 9.85 25.23 22.2 33.24 38.46 8.78 17.81 9.76 31.68 9.76 51H457l-22 1 3.5 22c2.11 8.93 6.03 17.29 10.94 25 22.1 34.72 69.57 48.39 107.56 33.54 20.65-8.08 22.5-15.31 34-23.54Zm320-1c12.51 5.34 10.73 10.47 1.91 18.57-8.18 7.52-16.65 12.67-26.91 16.83-27.39 11.09-63.18 8.47-89-5.71-56.7-31.15-64.76-116.41-20.96-161.69 16.95-17.52 41.58-27.96 65.96-28h13c17.15.2 38.68 7.29 52 18.09 3.48 2.82 13.82 11.03 13.1 15.87-.31 2.1-2.54 3.96-4.12 5.19-1.79 1.39-2.96 1.94-4.98 2.85-16.12-22.52-41.49-30.31-68-30-13.46.16-31.78 6.35-43 13.7-48.27 31.58-51.35 106.37-9 144.13 32.26 28.76 94.69 27.83 120-9.83Zm130-159.58c31.95-3.9 65.11 6.25 86.83 30.58 14.22 15.93 24.14 40.56 24.17 62v17c-.32 26.84-16.35 57.76-38 73.41-21.5 15.54-41.23 18.89-67 18.59-7.87-.1-18.5-2.52-26-5-31.73-10.49-54.2-35.62-62.1-68-3.13-12.81-3.05-22.06-2.9-35 .18-14.98 5.27-32.93 12.51-46 12.61-22.75 33.41-38.61 58.49-45.25l14-2.33ZM1229 184c2.81-11.94 13.43-23.44 23-30.63 20.75-15.58 38.22-16.66 63-16.37 10.93.13 25.57 4.26 35 9.75 11.55 6.71 21.12 16.99 26.56 29.25l5.44 14c3.84-16.33 17.18-31.14 31-39.95 20.33-12.95 36.95-13.32 60-13.05 21.62.26 42.69 11.59 55.22 29 14.93 20.75 13.78 43.98 13.78 68v104h-13V215c-.03-18.87-8.14-40.46-23-52.53-21.85-17.76-59.06-17.22-83-3.96-7.55 4.19-14.03 9.9-19.56 16.49-19.32 23.02-18.44 47.97-18.44 76v87h-13V221c-.03-17.84-4.92-39.43-17.32-52.83-19.51-21.09-55.03-24.08-80.68-13.72-11.39 4.6-21.2 12.02-28.91 21.55-18.09 22.38-17.09 46.16-17.09 73v89h-13V138h13v29l1 17Zm542 114c2.39 2.42 7.16 6.17 5.83 10-.91 2.65-6.56 7.66-8.83 9.56-8.97 7.53-18.99 12.76-30 16.58-30.89 10.72-70.81 4.63-97-14.9-48.89-36.45-51.28-121.31-5-160.94 14.53-12.44 35.76-21.21 55-21.3h13c8.96.11 17.63 2.32 26 5.31 23.27 8.31 40.35 24.18 50.69 46.69 7.74 16.84 10.31 32.6 10.31 51h-175c.03 34.99 20.14 67.24 53 80.55 13.99 5.67 25.24 6.47 40 6.45 15.51-.02 33.42-5.67 46-14.78l16-14.22Zm7-69c-.24-26.58-16.1-55.62-39-69.24-24.94-14.85-59.06-14.85-84 0-18.23 10.85-30.98 29.82-36.11 50.24l-2.89 19h162Zm-1180 0c-2.27-28.02-15.25-54.79-40-69.55-29.57-17.64-72.11-13.53-96.96 10.64-15.37 14.94-24.57 37.54-25.04 58.91h162Zm445-79.7c-32.04 5.95-54.87 20.41-67.55 51.7-4.06 10.03-6.4 24.18-6.45 35-.18 39.89 18.04 74.6 58 86.98 5.76 1.78 15.05 3.95 21 4.02 18.01.21 32.87-1.63 49-10.51 49.02-27.01 55.84-102.96 18.71-142.4-18.76-19.93-46.02-27.44-72.71-24.79Zm799 165.55c4.74-1.3 9.69-1.39 13.67 1.95 7.18 6.01 5.14 18.08-3.67 21.46-14.63 5.61-25.63-14.82-10-23.41Z"
            />
          </svg>
          <div className="relative">
            <p className="mt-[14.4px] mb-[14.4px] ml-[30px] text-[14.4px] font-thin leading-[1.6] text-[#d1d1d1] font-montserrat">
              My name is Uladzislau Karotkin, and I'm a Frontend Developer based
              in Prague, Czech Republic. I'm passionate about cutting-edge,
              pixel-perfect, beautiful interfaces and intuitively implemented UX.
              <br />
              <br />
              Explore my portfolio to see the convergence of code and design.
            </p>
            <span
              className="absolute top-0 left-0 w-[3px] h-full rounded-[10px] transition-colors duration-[2000ms] ease-linear"
              style={{
                background: `linear-gradient(0deg,${color1} 0%,${color2} 100%)`,
              }}
            ></span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative basis-[30.9017%] p-[20px]">
        <h2 className="mt-[30px] mb-[30px] font-montserrat text-[30px] font-thin">
          Projects
        </h2>
        <div className="relative text-[14px]">
          <span
            className="block w-[90px] h-[90px] opacity-100 rounded-tl-[8px] transition-all duration-300 ease-in-out absolute top-[-2px] bottom-0 left-[-2px]"
            style={{
              background: `linear-gradient(135deg,${color1} 0%,${color2} 50%,${color1} 100%)`,
            }}
          ></span>
          <ul className="relative z-[1] flex flex-col ml-0 pt-[34px] pr-[34px] pb-0 pl-[34px] bg-[#1d1d20] rounded-tl-[7px] font-montserrat">
            {/* LinkedIn Clone */}
            <li
              className={`inline-block relative cursor-pointer text-[#ccc] mb-[15px] pb-[5px] leading-normal no-underline transition-all duration-300 ease-in-out ${
                selectedProject === "linkedin" ? "selected" : ""
              }`}
            >
              <a
                href="https://likedinnew.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === "linkedin" ? "welcome" : "linkedin"
                    )
                  }
                  className="relative inline-block leading-normal transition-all duration-[200ms] ease-in-out transform hover:scale-110"
                >
                  LinkedIn clone
                  <span
                    className="block absolute bottom-[-2px] left-0 right-0 h-[2px] w-full opacity-100 transition-all duration-300 ease-in-out"
                    style={{
                      background: `linear-gradient(270deg,${color1} 0%,${color2} 100%)`,
                    }}
                  ></span>
                </span>
              </a>
            </li>

            {/* Repeat similar structure for other projects */}
            {/* Weather App */}
            <li
              className={`inline-block relative cursor-pointer text-[#ccc] mb-[15px] pb-[5px] leading-normal no-underline transition-all duration-300 ease-in-out ${
                selectedProject === "weather" ? "selected" : ""
              }`}
            >
              <a
                href="https://ihardysi.github.io/React-weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === "weather" ? "welcome" : "weather"
                    )
                  }
                  className="relative inline-block leading-normal transition-all duration-[200ms] ease-in-out transform hover:scale-110"
                >
                  Weather app
                  <span
                    className="block absolute bottom-[-2px] left-0 right-0 h-[2px] w-full opacity-100 transition-all duration-300 ease-in-out"
                    style={{
                      background: `linear-gradient(270deg,${color1} 0%,${color2} 100%)`,
                    }}
                  ></span>
                </span>
              </a>
            </li>

            {/* Invest */}
            <li
              className={`inline-block relative cursor-pointer text-[#ccc] mb-[15px] pb-[5px] leading-normal no-underline transition-all duration-300 ease-in-out ${
                selectedProject === "invest" ? "selected" : ""
              }`}
            >
              <a
                href="https://ihardysi.github.io/Layout_Invest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === "invest" ? "welcome" : "invest"
                    )
                  }
                  className="relative inline-block leading-normal transition-all duration-[200ms] ease-in-out transform hover:scale-110"
                >
                  Invest
                  <span
                    className="block absolute bottom-[-2px] left-0 right-0 h-[2px] w-full opacity-100 transition-all duration-300 ease-in-out"
                    style={{
                      background: `linear-gradient(270deg,${color1} 0%,${color2} 100%)`,
                    }}
                  ></span>
                </span>
              </a>
            </li>

            {/* Konstrakt */}
            <li
              className={`inline-block relative cursor-pointer text-[#ccc] mb-[15px] pb-[5px] leading-normal no-underline transition-all duration-300 ease-in-out ${
                selectedProject === "Konstrakt" ? "selected" : ""
              }`}
            >
              <a
                href="https://ihardysi.github.io/maket-konstruct/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === "Konstrakt" ? "welcome" : "Konstrakt"
                    )
                  }
                  className="relative inline-block leading-normal transition-all duration-[200ms] ease-in-out transform hover:scale-110"
                >
                  Konstrakt
                  <span
                    className="block absolute bottom-[-2px] left-0 right-0 h-[2px] w-full opacity-100 transition-all duration-300 ease-in-out"
                    style={{
                      background: `linear-gradient(270deg,${color1} 0%,${color2} 100%)`,
                    }}
                  ></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CentralComponent;
