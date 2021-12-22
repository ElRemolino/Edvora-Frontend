import React from 'react';
import Image from 'next/image';

const Card = ( { item }) => {
  // convert date
  return (
    <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px] grid grid-cols-2 gap-2">
      <div className="bg-red-500 ">img</div>
      <ul className="bg-red-500 lg:space-y-3 ">
        <li className=" lg:text-sm ">{item.product_name}</li>
        <li className=" text-edvora-greyFont lg:text-xs ">{item.brand_name}</li>
        <li className="  lg:text-sm ">${item.price}.00</li>
      </ul>
      <div className="bg-blue-500 h-[50%] border-2 col-span-2 grid lg:grid-cols-2 lg:grid-rows-3 ">
       <span className=" text-edvora-greyFont text-sm ">{item.address.state}</span>
       <span className=" text-edvora-greyFont text-sm ">Date:{item.date}</span>
       <span className=" text-edvora-greyFont h-[] text-sm lg:col-span-2">{item.discription} test</span>
      </div>
    </div>
  )
}

export default Card;
