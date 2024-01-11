"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Letter() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700] w-[14.4375rem] h-[2.6875rem]">
        내 우체통 들어가기
      </div>
      <div className="flex flex-col bg-white w-[20.3125rem] h-[18rem] shadow-modal rounded-[1.0625rem] items-center">
        <div className="text-[1.25rem] h-[2.875rem] leading-[2.875rem] text-center ">
          <span className="font-bold">우체통</span> 정보를 입력해주세요
        </div>
        <div className="flex flex-col gap-[1.25rem] mt-[2.06rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <div className="text-[0.875rem]">아이디</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
              type="text"
              placeholder="5자 이하로 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <div className="text-[0.875rem]">비밀번호</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
              type="text"
              placeholder="영문 + 숫자 조합으로 8자 이상 입력해 주세요."
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          alert("login success");
          router.push("/letterlist");
        }}
        className={`mt-[3.38rem] w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn`}
      >
        우체통 들아가기
      </button>
    </div>
  );
}
