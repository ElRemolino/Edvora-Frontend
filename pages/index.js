import React from 'react';

export default function Home() {
  return (
    <div className="flex bg-edvora-greyCard min-h-screen">
      <div className="bg-blue-200 md:bg-green-500  lg:bg-blue-500 w-[18%] ml-10 ">
        <div className=" bg-edvora-black  ">
          filterbox
        </div>
      </div>
      <div className=" bg-grey-200 md:bg-purple-500  lg:bg-orange-500 w-[78%] ml-10 mr-10">
        main content
      </div>
    </div>
  )
}
