import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px] grid grid-cols-2 gap-2">
      <div className="bg-red-500 ">img</div>
      <ul className="bg-red-500 ">
        <li className="  text-sm ">product name</li>
        <li className="  text-xs ">brand</li>
        <li className="  text-sm ">price</li>
      </ul>
      <div className="bg-red-500  col-span-2 grid grid-cols-2">
       <span>location</span>
       <span>date</span>
       description
      </div>

    </div>
  )
}

export default Card;
