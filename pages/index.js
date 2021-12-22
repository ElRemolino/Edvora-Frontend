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
      <div className="bg-red-500 md:bg-green-500  lg:bg-blue-500    ">
        <FilterContainer data={data} products={products} states={states} cities={cities} />
      </div>

      {/* Main Content Containers */}
      <div className=" bg-purple-500 p-10 md:w-[90%] w-[80vw]">
        grid goes here
        <div className=" bg-blue-400 ">
          <h1 className=" bg-red-400 text-white font-bold text-4xl max-h-12 w-[150px] ">Edvora</h1>
          <h2 className=" bg-red-400 text-edvora-greyFont relative top- h-15 w-[97px] text-2xl font-medium ">Products</h2>
        </div>
        <div className="bg-yellow-500 h-[80%] grid md:grid-rows-2 md:w-[]80vw">
          <div className=" bg-green-400  mt-8 border-2 min-h-[30%] md:w-[65vw] md:m-10">carosel</div>
          <div className=" bg-green-400  mt-8 border-2 min-h-[30%] md:w-[65vw] md:m-10">carosel</div>
        </div>
      </div>
    </div>
  )
}
