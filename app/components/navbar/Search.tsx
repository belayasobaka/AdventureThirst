'use client';

import { BiSearch } from "react-icons/bi";
import container from "@/app/components/Container";
import useSearchModal from "@/app/hooks/useSearchModal";

const Search = ( ) => {
  const searchModal = useSearchModal();

  return(
      <div
          onClick={searchModal.onOpen}
          className="
      border-[1px]
      w-full
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      trasition
      cursor-pointer
      ">

          <div className="
          flex
          flex-row
          items-center
          justify-between
          ">
              <div className="
                text-sm
                font-semibold
                px-6
              ">
                  Локация
              </div>
              <div className='
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                flex-center
              '>
                  Дата
              </div>
              <div className='
                text-sm
                pl-6
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
              '>
                  <div className="hidden sm:block">Продолжительность</div>
                  <div className="
                  p-2
                  rounded-full
                  text-white
                  bg-blue-700
                  " style={{background: "#5654CD"}}>
                      <BiSearch size={18} />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Search;