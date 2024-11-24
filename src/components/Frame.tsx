import React, { useState } from "react";
import Header from "./Header";
import CentralComponent from "./CentralComponent";

interface FrameProps {
  setMainColor: React.Dispatch<React.SetStateAction<string[]>>;
}

const Frame: React.FC<FrameProps> = () => {
  const [color1, setColor1] = useState("rgb(178,55,160)");
  const [color2, setColor2] = useState("rgb(74,205,60)");

  const handleColor = () => {
    const newColor1 = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
    const newColor2 = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
    setColor1(newColor1);
    setColor2(newColor2);
    console.log("new color");
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 256);
  };

  return (
    <div className="w-full h-full max-h-[791px] relative max-lg:max-h-none">
      <div className="h-full w-full flex flex-col justify-between absolute z-[1]">
        <div className="w-[300px] max-md:w-[100px] self-start">
          <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#gradient-1)"
          >
            <defs>
              <linearGradient
                id="gradient-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0"
                  stopColor={color1}
                  style={{ transition: "stop-color 1s linear" }}
                />
                <stop
                  offset="0.5"
                  stopColor={color2}
                  style={{ transition: "stop-color 1s linear" }}
                />
                <stop
                  offset="1"
                  stopColor={color1}
                  style={{ transition: "stop-color 1s linear" }}
                />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M8 0H300L280 20H25C23.6739 20 22.4021 20.5268 21.4645 21.4645C20.5268 22.4021 20 23.6739 20 25V280L0 300V8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0Z"
              />
              <path
                d="M8 0.5H298.793L279.793 19.5H25C23.5413 19.5 22.1424 20.0795 21.1109 21.1109C20.0795 22.1424 19.5 23.5413 19.5 25V279.793L0.5 298.793V8C0.5 6.01088 1.29018 4.10322 2.6967 2.6967C4.10322 1.29018 6.01088 0.5 8 0.5Z"
                stroke="black"
              />
              <path
                d="M8 0.5H298.793L279.793 19.5H25C23.5413 19.5 22.1424 20.0795 21.1109 21.1109C20.0795 22.1424 19.5 23.5413 19.5 25V279.793L0.5 298.793V8C0.5 6.01088 1.29018 4.10322 2.6967 2.6967C4.10322 1.29018 6.01088 0.5 8 0.5Z"
                stroke="black"
                strokeOpacity="0.2"
              />
            </g>
          </svg>
        </div>
        <div className="w-[300px] max-md:w-[100px] self-end rotate-180 max-md:hidden">
          <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#gradient-2)"
          >
            <defs>
              <linearGradient
                id="gradient-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0"
                  stopColor={color1}
                  style={{ transition: "stop-color 1s linear" }}
                />
                <stop
                  offset="0.5"
                  stopColor={color2}
                  style={{ transition: "stop-color 1s linear" }}
                />
                <stop
                  offset="1"
                  stopColor={color1}
                  style={{ transition: "stop-color 1s linear" }}
                />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M8 0H300L280 20H25C23.6739 20 22.4021 20.5268 21.4645 21.4645C20.5268 22.4021 20 23.6739 20 25V280L0 300V8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0Z"
              />
              <path
                d="M8 0.5H298.793L279.793 19.5H25C23.5413 19.5 22.1424 20.0795 21.1109 21.1109C20.0795 22.1424 19.5 23.5413 19.5 25V279.793L0.5 298.793V8C0.5 6.01088 1.29018 4.10322 2.6967 2.6967C4.10322 1.29018 6.01088 0.5 8 0.5Z"
                stroke="black"
              />
              <path
                d="M8 0.5H298.793L279.793 19.5H25C23.5413 19.5 22.1424 20.0795 21.1109 21.1109C20.0795 22.1424 19.5 23.5413 19.5 25V279.793L0.5 298.793V8C0.5 6.01088 1.29018 4.10322 2.6967 2.6967C4.10322 1.29018 6.01088 0.5 8 0.5Z"
                stroke="black"
                strokeOpacity="0.2"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col w-full h-full p-5 relative z-[100]">
        <Header handleColor={handleColor} />
        <CentralComponent color1={color1} color2={color2} />
      </div>
    </div>
  );
};

export default Frame;
