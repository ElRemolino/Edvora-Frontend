import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters, name } ) => {

  const liCls = "lg:relative lg:bottom-10 lg:left-5 h-[40px] text-edvora-offwhiteFont bg-edvora-greyCard b-2 hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px]";

  return (
    <div className="lg:relative lg:flex-col lg:columns-1 lg:float-right md:float-none">
      <ol className="absolute flex-col lg:min-w-[160px] lg:left-1 lg:mt-2 md:mt-10 md:left-12 ">
        {data.map((item, i) => (
          <li key={i} className="flex justify-center relative  z-10 bottom-10 left-5 min-h-[40px] text-edvora-offwhiteFont  border-2 rounded-md  border-edvora-hr bg-edvora-login b-2 hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px]" onClick={handleFilters} >
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default DropDownCard;