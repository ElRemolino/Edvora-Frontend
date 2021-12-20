import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const FilterButton = () => {
  return (
    <div className="w-[168px] bg-edvora-greyCard mt-11 text-edvora-offwhiteFont ml-7 ">
      <button className="flex justify-between w-full h-[37.5px] font-light text-[20px] ">
        <span className="bg-rose-500 h-full pl-2">Product</span>
          <FontAwesomeIcon className="mr-3 mt-2" icon={faCaretDown} size="m"></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default FilterButton;
