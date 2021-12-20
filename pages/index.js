import React from 'react';

export default function Home() {
  return (
    <div className="flex bg-rose-50 h-[1000px]">
      Main
      <div className="flex bg-blue-200">
        sidebar
      </div>
      <div className=" bg-green-200 ">
        main content
      </div>
    </div>
  )
}
