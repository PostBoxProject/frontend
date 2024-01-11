"use client";

import Image from "next/image";
import { ReactElement, use, useState } from "react";

export default function Letterlist() {
  const [isOpen, setIsopen] = useState(false);
  // const [letter, setLetter] = useState("");
  const x = [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1];
  let a = x.sort();
  let name = "추동원 우체통";
  let letter = "나는 편지임";

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setIsopen(true);
  };
  return (
    <div className="overflow-y-auto ">
      <div className="ml-[1.2rem] mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700] w-[12.4375rem] h-[2.6875rem]">
        {name}
      </div>
      <div className="flex flex-col items-center">
        <div
          className="grid 
      grid-cols-2 gap-12 overflow-y-scroll"
        >
          {a.map((i, key) => {
            return i == 1 ? (
              <button onClick={onClick} key={key}>
                <Image
                  src={"/letterOpen.svg"}
                  alt="letterOpen"
                  width={130}
                  height={130}
                ></Image>
              </button>
            ) : (
              <button onClick={onClick} key={key}>
                <Image
                  key={i}
                  src={"/letterClose.svg"}
                  alt="letterClose"
                  width={130}
                  height={130}
                ></Image>
              </button>
            );
          })}
        </div>
        {isOpen ? (
          <div className="">
            <div className="bg-white w-[19.375rem] h-[14.9375rem]">
              {letter}
            </div>
            <button
              onClick={() => {
                setIsopen(false);
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        ) : null}
        <button
          className={`w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn m-[0.19rem] mt-[3rem]`}
        >
          내 우체통 주소 복사
        </button>
      </div>
    </div>
  );
}
