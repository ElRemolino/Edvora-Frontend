import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters, name } ) => {
  const [filters, setFilters] = useState({});
  const liCls = "text-edvora-offwhiteFont hover:text-edvora-black hover:bg-edvora-hr font-medium font-bold h-full";

  return (
    <div className="relative flex-col columns-1 float-right bg-green-500">
      <ol className="absolute flex-col min-w-[160px]">
        {data.map((item, i) => (
          <li  key={i} className="relative h-[40px] text-edvora-offwhiteFont bg-edvora-greyCard hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px] bottom-10 left-5" onClick={(e) => handleFilters(e)} data={item} data-name={name} data-listval={item.brand_name} >
            {item.brand_name}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default DropDownCard;