import React from 'react';
import DropDownBtnWithCard from './DropDownBtnWithCard';

const FilterContainer = ( { data } ) => {
  return (
    <div className=" bg-edvora-black h-[275px] w-[228px] mx-10 mt-11 rounded-2xl ">
      <p className=" pt-6 pl-7  top-[8.72%] left-[12.2%] right-[91.22%] bottom-[88.15%] text-[20px] text-edvora-greyFont leading-6 ">Filters
      </p>
      <hr className="relative top-3 left-6 text-edvora-hr w-[160px]"></hr>
      <div className="space-y-4" >
        <DropDownBtnWithCard data={data} name={'Product'} />
        <DropDownBtnWithCard data={data} name={'State'} />
        <DropDownBtnWithCard data={data} name={'State'} />
      </div>
    </div>
  )
}

export default FilterContainer;
