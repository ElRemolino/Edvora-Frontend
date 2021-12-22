import React from 'react';
import Image from 'next/image';

const Card = ( { item }) => {
  // convert date
  return (
    <div className=" bg-edvora-greyCard text-white   rounded-lg h-[170px] w-[210px] grid lg:grid-cols-2 lg:gap-2 md:bg-purple-600  md:">
      <div className="">img</div>
      <ul className=" lg:space-y-3 ">
        <li className=" lg:text-sm ">{item.product_name}</li>
        <li className=" text-edvora-greyFont lg:text-xs ">{item.brand_name}</li>
        <li className="  lg:text-sm ">{'$' + item.price + '.00'}</li>
      </ul>
      <div className=" col-span-2 grid lg:grid-cols-2 lg:grid-rows-3">
       <span className=" text-edvora-greyFont text-sm relative left-2 -top-1">{item.address.state}</span>
       <span className=" text-edvora-greyFont text-xs w-[110%]">Date:{item.date.slice(0,10)}</span>
       <span className=" text-edvora-greyFont text-xs lg:col-span-2 relative left-2 ">{item.discription} test</span>
      </div>
    </div>
  )
}

export default Card;
