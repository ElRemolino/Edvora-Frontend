import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters, name } ) => {

  const liCls = "lg:relative lg:bottom-10 lg:left-5 h-[40px] text-edvora-offwhiteFont bg-edvora-greyCard b-2 hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px]";

  return (
    <div className="lg:relative lg:flex-col lg:columns-1 lg:float-right md:float-none">
      <ol className="lg:absolute flex-col lg:min-w-[160px] md:absolute md:mt-10 ">
        {data.map((item, i) => (
          <li key={i} className="flex justify-center  relative bottom-10 left-5 min-h-[40px] text-edvora-offwhiteFont  border-2 rounded-md  border-edvora-hr bg-edvora-greyCard md:bg-green-400 b-2 hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px]" onClick={handleFilters} >
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default DropDownCard;