"use client";
import Image from "next/image";

import { ChangeEvent, useState } from "react";

export default function Page({
  params,
}: {
  params: { postboxname: string; id: string };
}) {
  const postName = decodeURI(params.postboxname);
  const [isOpen, setIsopen] = useState(false);
  const [content, setContent] = useState("hi");
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    setIsopen((prev) => {
      return !prev;
    });
  };
  const onSend = () => {
    fetch("/api/letters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: content,
        postboxId: params.id,
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err))
      .then((data) => console.log(data));
    alert("Successfully Send");
    setIsopen(false);
  };
  return (
    <div className="flex flex-col items-center mt-[6em]">
      <div className="mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700]  h-[2.6875rem]">
        {postName} 입니다.
      </div>
      <Image
        className="ml-[5rem] mr-[5.5rem]"
        src={"/postbox.svg"}
        alt="PostBox"
        width={220}
        height={270}
      ></Image>
      <div
        className={"w-full flex flex-col gap-[1.25rem] mt-[39px] items-center"}
      >
        <div className={"w-btn h-btn bg-btn rounded-2xl"}>
          <button
            onClick={onClick}
            className={`w-[20.125rem] h-[3.625rem]  text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn m-[0.19rem]`}
          >
            편지 쓰기
          </button>
        </div>
        {isOpen ? (
          <div className="flex flex-col top-[10rem] absolute w-[20rem] h-[28rem] p-4 flex bg-white  border border-black border-2 ">
            <textarea
              className="flex h-[24rem] p-2 w-full bg-white border-dashed border font-xl rounded-2xl border-[#322E21] border-2 "
              placeholder="편지를 작성해주세요"
              onChange={onChange}
            ></textarea>
            <button
              onClick={onClick}
              className="absolute top-[-1rem] right-[-1rem]"
            >
              <Image
                alt="closeBTN"
                src="/xBTN.svg"
                width={45}
                height={45}
              ></Image>
            </button>
            <button
              onClick={onSend}
              className="mt-2 h-[2.6rem] border-dashed border-btnborder  text-[#FFF9E4] rounded-xl border-2 bg-btn m-[0.19rem]"
            >
              보내기
            </button>
          </div>
        ) : null}
      </div>
      <div className="bg-sub w-full bottom-0 absolute z-[-1] t-[30rem] h-[30rem]"></div>
    </div>
  );
}
