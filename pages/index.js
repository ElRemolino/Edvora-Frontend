import React from 'react';

export default function Home() {
  return (
    <div className="flex bg-rose-50 min-h-screen">
      Main
      <div className="bg-blue-200 md:bg-green-500  lg:bg-blue-500 w-[20%]">
        sidebar
      </div>
      <div className=" bg-grey-200 md:bg-purple-500  lg:bg-orange-500 w-[70%] ">
        main content
      </div>
    </div>
  )
}
