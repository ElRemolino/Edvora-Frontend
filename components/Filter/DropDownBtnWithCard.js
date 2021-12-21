import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropDownBtn from './DropDownBtn';
import DropDownCard from './DropDownCard';

const DropDownBtnWithCard = ( { data, name } ) => {
  const [filter, setFilter] = useState({});
  const [open, setOpen] = useState(false);
  const liCls = "bg-edvora-greyCard2 text-edvora-greyFont";

  const handleFilters = (e) => {
    let newFilter = e.target.attributes.getNamedItem("data-listval").value;
    let filterName =e.target.attributes.getNamedItem("data-name").value;
    setFilter({[filterName]: newFilter})
    console.log(filter)
    return

  }

  return (
    <div className="  w-[168px] bg-edvora-greyCard mt-11 text-edvora-greyCard ml-7 ">
      <button  className="flex justify-between w-full h-[37.5px] font-light text-[20px] rounded-md " onClick={() => setOpen(!open)}>
        <span className="h-full pl-2 font-light text-edvora-offwhiteFont ">{name}</span>
        <FontAwesomeIcon className="text-edvora-offwhiteFont mr-3 mt-2  " icon={faCaretDown} size="lg" ></FontAwesomeIcon>
      </button>
      <div>
        {open && <DropDownCard data={data} name={name} handleFilters={handleFilters}/>}
      </div>
    </div>
  )
}

export default DropDownBtnWithCard;
