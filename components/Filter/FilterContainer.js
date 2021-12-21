import React, { useState } from 'react';
import DropDownBtnWithCard from './DropDownBtnWithCard';

const FilterContainer = ({ products, states, cities  }) => {
  

  return (
    <div className=" bg-edvora-black h-[275px] w-[228px] mx-10 mt-11 rounded-2xl ">
      <p className=" pt-6 pl-7  top-[8.72%] left-[12.2%] right-[91.22%] bottom-[88.15%] text-[22px] text-edvora-greyFont leading-6 ">Filters
      </p>
      <hr className="relative top-3 left-6 text-edvora-hr w-[160px]"></hr>
      <div className="space-y-4" >
        <DropDownBtnWithCard data={products} name={'Product'} />
        <DropDownBtnWithCard data={states} name={'State'} />
        <DropDownBtnWithCard data={cities} name={'City'} />
      </div>
    </div>
  )
}

export default FilterContainer;
