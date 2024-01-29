"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Letter() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePWD = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  const onClick = () => {
    // alert("login success");
    fetch("/api/postboxs/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postboxName: name,
        password: pwd,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error && data.error === 'Unauthorized') {
          console.error("Login failed:", data);
          setError("Login failed. Please check your credentials.");
        }else{
          localStorage.setItem("acess-token", data.access_token);
          // 로그인 성공 시 페이지 전환
          router.push(`/letterlist/${name}`);
        }        
      })
      .catch((error) => {
        console.error("Unexpected error during login:", error);
               
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700] w-[14.4375rem] h-[2.6875rem]">
        내 우체통 들어가기
      </div>
      {error && (
        <div className="text-red-500 mb-2">{/* 실패 메시지를 표시하는 부분 */}</div>
      )}
      <div className="flex flex-col bg-white w-[20.3125rem] h-[18rem] shadow-modal rounded-[1.0625rem] items-center">
        <div className="text-[1.25rem] h-[2.875rem] leading-[2.875rem] text-center ">
          <span className="font-bold">우체통</span> 정보를 입력해주세요
        </div>
        <div className="flex flex-col gap-[1.25rem] mt-[2.06rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <div className="text-[0.875rem]">name</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
              type="text"
              placeholder="5자 이하로 입력해주세요"
              onChange={onChangeName}
            />
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <div className="text-[0.875rem]">비밀번호</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
              type="text"
              onChange={onChangePWD}
              placeholder="영문 + 숫자 조합으로 8자 이상 입력해 주세요."
            />
          </div>
        </div>
      </div>
      <button
        onClick={onClick}
        className={`mt-[3.38rem] w-[20.125rem] h-[3.625rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn`}
      >
        우체통 들아가기
      </button>
    </div>
  );
}




