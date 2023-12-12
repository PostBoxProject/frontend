"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  return (
    <div className={"flex flex-col items-center"}>
      <Image
        className="mt-[5.5rem] ml-[5rem] mr-[5.5rem]"
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
            내 우체통 들어가기
          </button>
        </div>
        <div className={"w-btn h-btn bg-btn rounded-2xl"}>
          <button
            onClick={() => router.push("/letter")}
            className={`w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn m-[0.19rem]`}
          >
            내 우체통 만들기
          </button>
        </div>
      </div>
      <div className="bg-sub w-full bottom-0 absolute z-[-1] t-[30rem] h-[24rem]"></div>
    </div>
  );
}
