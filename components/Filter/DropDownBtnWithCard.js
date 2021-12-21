import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropDownBtn from './DropDownBtn';
import DropDownCard from './DropDownCard';

const DropDownBtnWithCard = ( { data, name } ) => {
  const [filters, setFilters] = useState([]);
  const [open, setOpen] = useState(false);
  const liCls = "bg-edvora-greyCard2 text-edvora-greyFont";



  const handleFilters = (e) => {
    console.log('hi', e);
  }

  return (
    <div className="  w-[168px] bg-edvora-greyCard mt-11 text-edvora-greyCard ml-7 ">
      <button type="dropbtn" className="flex justify-between w-full h-[37.5px] font-light text-[20px] ">
        <span className="bg-rose-500 h-full pl-2 font-light text-edvora-offwhiteFont " onClick={() => setOpen(!open)}>{name}</span>
          {open && <FontAwesomeIcon className="mr-3 mt-2" icon={faCaretDown} />}
      </button>
      <div>
        {open && <DropDownCard data={data} handleFilters={handleFilters}/>}
          {/* <ul>
            {data.map((item, i) => (

              <li key={i} className={liCls} >
                {item.brand_name}
              </li>
            ))}
          </ul> */}
      </div>
    </div>
  )
}

export default DropDownBtnWithCard;
