import React from 'react';

export default function Home() {
  return (
    <div className="flex bg-edvora-greyCard min-h-screen min-w-screen">
      <div className="bg-blue-200 md:bg-green-500  lg:bg-blue-500 ml-10 ">
        <div className=" bg-edvora-black h-[275px] w-[228px] mx-10 mt-11 ">
          <p className=" pt-6 pl-7  top-[8.72%] left-[12.2%] right-[91.22%] bottom-[88.15%] text-[20px] text-edvora-greyFont leading-6 ">Filters
          <hr className="relative top-3 text-edvora-hr w-[160px]"/>
          </p>
        </div>
      </div>
      <div className=" bg-grey-200 md:bg-purple-500  lg:bg-orange-500 w-[78%] ml-10 mr-10">
        main content
      </div>
    </div>
  )
}
