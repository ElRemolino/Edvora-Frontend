import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters } ) => {
  const [filters, setFilters] = useState([]);
  const liCls = "bg-edvora-greyCard2 text-edvora-greyFont";

  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <button data='data-test' key={i} className=" text-edvora-offwhiteFont hover:text-edvora-black hover:bg-edvora-hr font-medium font-bold " onClick={() => handleFilters()}>
            {item.brand_name}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default DropDownCard;
