import React from 'react';
import FilterContainer from '../components/Filter/FilterContainer';

export default function Home() {
  return (
    <div className="flex bg-edvora-greyCard min-h-screen min-w-screen">
      <div className="bg-blue-200 md:bg-green-500  lg:bg-blue-500 ml-10 ">
        <FilterContainer />
      </div>
      <div className=" bg-grey-200 md:bg-purple-500  lg:bg-orange-500 w-[78%] ml-10 mr-10">
        main content
      </div>
    </div>
  )
}
