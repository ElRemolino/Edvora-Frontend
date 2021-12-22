import React from 'react';
import Card from './Card';

const CarouselContainer = () => {
  return (
    <div className="lg:relative lg:top-14 lg:max-w-[90%] ">
      <h2 className="text-white text-2xl">Product Name</h2>
      <hr className="text-edvora-hr lg:h-[10px] lg:w-[85%]"></hr>
      <div className="lg:flex lg:pt-4">
        <div className="bg-black h-[190px] max-w-[90%] rounded-2xl lg:flex lg:justify-start lg:p-5 lg:relative lg:right-3 lg:space-x-5">
          <Card />
          <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
          <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
          <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
        </div>
        <button className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[40px] lg:relative lg:top-6 lg:left-8">arrow</button>
      </div>
    </div>
  )
}

export default CarouselContainer;
