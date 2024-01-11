"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LetterSearch() {
  const router = useRouter();
  const [postName, setPostName] = useState<String>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostName(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700]  h-[2.6875rem]">
        우체통 찾기
      </div>
      <div className="flex flex-col bg-white w-[20.3125rem] h-[18rem] shadow-modal rounded-[1.0625rem] items-center">
        <div className="text-[1.25rem] h-[2.875rem] leading-[2.875rem] text-center ">
          <span className="font-bold">우체통</span> 이름을 검색해 주세요
        </div>
        <input
          className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
          type="text"
          placeholder="검색할 아이디를 입력하세요"
          onChange={onChange}
        />
      </div>
      <button
        onClick={() => {
          alert("search success");
          router.push(`/postBox/${postName}`);
        }}
        className={`mt-[3.38rem] w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn`}
      >
        우체통 들아가기
      </button>
    </div>
  );
}
