import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarouselContainer = ({ filteredData }) => {

  let cardsDisplayed = filteredData.slice(0,4)

  return (
    <div className="lg:relative lg:top-14 lg:max-w-[70vw] lg:w-[80vw]">
      <h2 className="text-white text-2xl">Product Name</h2>
      <hr className="text-edvora-hr lg:h-[10px] lg:w-[85%]"></hr>
      <div className="lg:flex lg:pt-4">
        <div className="bg-black grid lg:grid-cols-4 rounded-2xl lg:h-[80%] lg:w-[80vw] lg:p-5 lg:relative lg:right-3 lg:space-x-5 md:bg-red-500 md:grid-cols-2">
          {cardsDisplayed.map((item, i) => {
            return (
              <Card key={i} item={item} />
            )
          })}
        </div>
        <button className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[40px] lg:relative lg:top-6 lg:left-8"><FontAwesomeIcon className="text-edvora-offwhiteFont mr-3 mt-2" icon={faChevronRight} size="lg" ></FontAwesomeIcon></button>
      </div>
    </div>
  )
}

export default CarouselContainer;
