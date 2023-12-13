"use client";

import Image from "next/image";

export default function Letterlist() {
  const x = [1, 0, 1, 0, 1, 0];
  let a = x.sort;
  let name = "추동원 우체통";
  return (
    <>
      {" "}
      <div className="ml-[1.2rem] mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700] w-[12.4375rem] h-[2.6875rem]">
        {name}
      </div>
      <div className="flex flex-col items-center">
        <div
          className="grid 
      grid-cols-2 gap-12"
        >
          {x.map((i, key) => {
            return x[i] == 1 ? (
              <div onClick={() => {}}>
                <Image
                  key={i}
                  src={"/letterOpen.svg"}
                  alt="letterOpen"
                  width={130}
                  height={130}
                ></Image>
              </div>
            ) : (
              <div>
                <Image
                  key={i}
                  src={"/letterClose.svg"}
                  alt="letterClose"
                  width={130}
                  height={130}
                ></Image>
              </div>
            );
          })}
        </div>
        <button
          className={`w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn m-[0.19rem] mt-[3rem]`}
        >
          내 우체통 주소 복사
        </button>
      </div>
    </>
  );
}
