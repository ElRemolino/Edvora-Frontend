import React, { useState, useEffect } from 'react';
import FilterContainer from '../components/Filter/FilterContainer';

export default function Home() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(data => data.json())
      .then(data => {
        const products = new Set();
        const states = new Set();
        const cities = new Set();

        data.forEach(item => {
          products.add(item.brand_name);
          states.add(item.address.state);
          cities.add(item.address.city);
        });

        setData(data);
        setProducts([...products]);
        setStates([...states]);
        setCities([...cities]);
      });
  }, []);

  return (
    <div className="flex bg-edvora-greyCard min-h-screen min-w-screen">
      <div name="filter-container">
        <FilterContainer data={data} products={products} states={states} cities={cities} />
      </div>

      {/* Main Content Containers */}
      <div className="lg:p-10 lg:relative lg:left-20 lg:w-[100vw]">
        <div className="top-8">
          <h1 className=" text-white font-bold text-4xl max-h-12 w-[150px]">Edvora</h1>
          <h2 className=" text-edvora-greyFont h-15 w-[97px] text-2xl font-medium relative top-8 ">Products</h2>
        </div>
        <div className="bg-yellow-500 lg:h-[80%] lg:max-w-[50vw]">

          <div className=" bg-green-400 relative top-14 ">
            <h2 className="text-white text-2xl">Product Name</h2>
            <hr className="text-edvora-hr h-[10px]"></hr>
            <div className="bg-red-500 flex">
              <div className="bg-black h-[190px] w-[95%] rounded-2xl lg:flex lg:justify-center lg:p-5 lg:relative lg:right-3 lg:space-x-4">
                <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px] ">#</div>
                <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
                <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
                <div className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[210px]">#</div>
              </div>
              <button className=" bg-edvora-greyCard text-white lg:h-[150px] lg:w-[40px] lg:absolute lg:top-16 lg:right-2">arrow</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
