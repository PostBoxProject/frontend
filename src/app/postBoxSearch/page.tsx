"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useEffect } from "react";

interface PostboxItem {
  id: number;
  name: string;
  email: string;
}

function generatePageNumbers(totalPages: number): number[]{
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++){
    pageNumbers.push(i);
  }
  return pageNumbers;
}

export default function LetterSearch() {
  const router = useRouter();
  const [postName, setPostName] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<PostboxItem>>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); 

  const [searching, setSearching] = useState(false);
  

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostName(e.target.value);
  };

  const searchPostbox = async () => {
    try {
      setSearching(true);
      // User-inputted keyword used in the API request
      const response = await fetch(`/api/postboxs/${postName}?pageNo=${currentPage}&pageSize=4`);
      const data = await response.json();
      
      console.log(data)
      setTotalPages(data.totalPages || 0);

      // Update search results using data.items
      setSearchResults(data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const onPageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);    
  };

  useEffect(() => {
    if(searching) {
      searchPostbox();
    }    
  }, [currentPage, searching]);


  return (
    <div className="flex flex-col items-center">

      <div className="mb-[1.3rem] mt-[1.2rem] text-[#BA4040] text-[1.75rem] font-[700]  h-[2.6875rem]">
        우체통 찾기
      </div>

      <div className="flex flex-col bg-white w-[20rem] h-[30rem] shadow-modal rounded-[1.0625rem] p-4">

        <div className="flex flex-col items-center mb-4">
          <div className="text-[1.25rem] h-[2.875rem] leading-[2.875rem] text-center ">
            <span className="font-bold">우체통</span> 이름을 검색해 주세요
          </div>

          <div className="flex">
            <input
              className="w-full h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4 mb-2"
              type="text"
              placeholder="검색할 아이디를 입력하세요"
              onChange={onChange}
            />
            <button
              onClick={searchPostbox}
              className={`w-[6rem] h-[2.5rem] text-[#FFF9E4] rounded-2xl border-dashed border-btnborder border-2 bg-btn ml-2`}
            >
              검색하기
            </button>

          </div>
        </div>


        <div className="list-container text-left ml-7">

          {searchResults.map((item, index) => (            
            <div key={index} className="list-item" onClick={() => { router.push(`/postbox/${item.id}-${item.name}`); }}>              
              <p >Name: {item.name}</p>
              <p >Email: {item.email}</p>              
              {index !== searchResults.length - 1 && <hr className="my-3 border-gray-300" />}
            </div>
          ))}

        </div>  

        
        

      </div>      
        <div className="page-numbers">
            {generatePageNumbers(totalPages).map((pageNumber) => (
              <button 
                key={pageNumber}
                onClick={() => onPageClick(pageNumber)}
                className={`mx-1 mt-3 ${pageNumber === currentPage ? 'active' : ''}`}
              >
                <span className={pageNumber === currentPage ? "font-bold" : ""}>
                  {pageNumber}
                </span>
                
              </button>
            ))}
          </div>      

    </div>
  );
}

