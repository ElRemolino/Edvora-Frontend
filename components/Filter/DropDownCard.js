import React, { useState } from 'react';

const DropDownCard = ( { data, handleFilters, name } ) => {
  const [filters, setFilters] = useState({});
  const liCls = "relative bottom-10 left-5 h-[40px] text-edvora-offwhiteFont bg-edvora-greyCard hover:text-edvora-black hover:bg-edvora-hr font-medium w-[160px]";

  return (
    <div className="relative flex-col columns-1 float-right bg-green-500">
      <ol className="absolute flex-col min-w-[160px]">
        {data.map((item, i) => (
          <li key={i} className={liCls} onClick={handleFilters} >
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default DropDownCard;