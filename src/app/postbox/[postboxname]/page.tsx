"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { postboxname: string } }) {
  const postName = decodeURI(params.postboxname);
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
            className={`w-[20.125rem] h-[3.625rem]  text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn m-[0.19rem]`}
          >
            편지 쓰기
          </button>
        </div>
      </div>
      <div className="bg-sub w-full bottom-0 absolute z-[-1] t-[30rem] h-[30rem]"></div>
    </div>
  );
}
