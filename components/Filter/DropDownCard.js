import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters, name } ) => {
  const [filters, setFilters] = useState({});
  const liCls = "text-edvora-offwhiteFont hover:text-edvora-black hover:bg-edvora-hr font-medium font-bold h-full";

  return (
    <div className="flex-col">
      <ol>
        {data.map((item, i) => (
          <button  key={i} className=" text-edvora-offwhiteFont hover:text-edvora-black hover:bg-edvora-hr font-medium font-bold h-full" onClick={(e) => handleFilters(e)} data={item} data-name={name} data-listval={item.brand_name} >
            {item.brand_name}
          </button>
        ))}
      </ol>
    </div>
  )
}

export default DropDownCard;