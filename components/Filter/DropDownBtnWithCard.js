import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropDownCard from './DropDownCard';

const DropDownBtnWithCard = ( { data, name, filter, setFilter } ) => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(name);

  const handleFilters = (e) => {
    let newFilter = e.target.innerHTML;
    if (newFilter === display) {
      newFilter = '';
      setDisplay(name);
    } else {
      setDisplay(newFilter);
      setFilter(newFilter);
    }
    setOpen(!open);
  }

  return (
    <div className="  w-[168px] bg-edvora-greyCard mt-11 text-edvora-greyCard ml-7 ">
      <button  className="flex flex-wrap justify-between w-full min-h-[37.5px] font-light text-[20px] rounded-md " onClick={() => setOpen(!open)}>
        <span className="h-full pl-2 font-light text-edvora-offwhiteFont ">{display}</span>
        <FontAwesomeIcon className="text-edvora-offwhiteFont mr-3 mt-2  " icon={faCaretDown} size="lg" ></FontAwesomeIcon>
      </button>
      <div>
        {open && <DropDownCard data={data} name={name} handleFilters={handleFilters}/>}
      </div>
    </div>
  )
}

export default DropDownBtnWithCard;
