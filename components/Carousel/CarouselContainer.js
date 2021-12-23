import React, { useState, useEffect } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarouselContainer = ({ productFilter, filteredData }) => {
  const [counter, setCounter] = useState(4);
  let displayed = filteredData.slice(0, counter);
  const [display, setDisplay] = useState([]);
  let length = filteredData.length;

  // const handleClick = () => {
  //   console.log(length, counter);
  //   console.log(display);
  //   if (length - counter < 4) {
  //     let newDisplay = filteredData.slice(counter);
  //     setCounter(0);
  //     setDisplay(newDisplay);
  //   } else {
  //     let newDisplay = filteredData.slice(counter, counter + 4);
  //     setCounter(counter + 4);
  //     setDisplay(newDisplay);
  //   }
  // }


  return (
    <div className="lg:relative lg:top-14 lg:max-w-[70vw] lg:w-[80vw]">
      <h2 className="text-white text-2xl pb-4">{productFilter}</h2>
      <hr className="text-edvora-hr lg:h-[10px] lg:w-[85%] "></hr>
      <div className="lg:flex lg:pt-4">
        <div className="bg-black grid lg:grid-cols-4 rounded-2xl lg:h-[80%] lg:max-w-[80vw] lg:p-5 lg:relative lg:right-3 lg:space-x-5  md:grid-cols-2 md:pl-5 md:pt-5 md:pb-5">
          {
              display.map((item, i) => {
                return (
                  <Card key={i} item={item} />
                )
              })
          }
        </div>
        <button onClick={handleClick} className="bg-edvora-greyCard text-white lg:h-[150px] lg:w-[40px] lg:relative lg:top-6 lg:left-8"><FontAwesomeIcon className="text-edvora-offwhiteFont mr-3 mt-2" icon={faChevronRight} size="lg" />
        </button>
      </div>
    </div>
  )
}

export default CarouselContainer;
