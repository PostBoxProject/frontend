"use client";

import Image from "next/image";
import { ReactElement, use, useEffect, useState } from "react";

type LetterDetail = {
  id: string;
  description: string;
  read: boolean;
};

export default function Letterlist({ params }: { params: { id: string } }) {
  const [isOpen, setIsopen] = useState(false);
  const [letterList, setLetterList] = useState<LetterDetail[]>([]);
  const [letterID, setLetterID] = useState("");
  const [letter, setletter] = useState<LetterDetail>();
  const id = decodeURI(params.id);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLetterID(e.currentTarget.id);
    setIsopen(true);
    fetch(`/api/letters/postbox`, {
      headers: { Authorization: localStorage.getItem("acess-token")! },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log(data);
        setletter(data.description);
      });
  };

  useEffect(() => {
    console.log('toekn2',localStorage);
    console.log('toekn2',localStorage.getItem("access-token"));
    fetch(`/api/letters/postbox`, {
      headers: { 
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLetterList(data);
      });
  }, []);

  return (
    <div className="overflow-y-auto ">
      <div className="ml-[1.2rem] mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700] w-[12.4375rem] h-[2.6875rem]">
        {id}
      </div>
      <div className="flex flex-col items-center">
        <div
          className="grid 
      grid-cols-2 gap-12 overflow-y-scroll"
        >
          {letterList.map((i, key) => {
            return i.read == true ? (
              <button onClick={onClick} key={i.id} id={i.id}>
                <Image
                  src="/letterOpen.svg"
                  alt="letterOpen"
                  width={130}
                  height={130}
                ></Image>
              </button>
            ) : (
              <button onClick={onClick} key={i.id} id={i.id}>
                <Image
                  src="/letterClose.svg"
                  alt="letterClose"
                  width={130}
                  height={130}
                ></Image>
              </button>
            );
          })}
        </div>
        {isOpen ? (
          <div className="absolute">
            <div className="relative">
              <div className="bg-white w-[19.375rem] h-[14.9375rem] p-4 border-2 border-solid  text-xl border-black ">
                {letter?.description}
              </div>
              <button
                className="absolute top-2 right-4 text-xl"
                onClick={() => {
                  setIsopen(false);
                }}
              >
                X
              </button>
            </div>
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
