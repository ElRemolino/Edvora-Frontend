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
      <div className="bg-blue-200 md:bg-green-500  lg:bg-blue-500 ml-10 ">
        <FilterContainer data={data} products={products} states={states} cities={cities}/>
      </div>
      <div className="flex-row bg-grey-200  w-[78%] ml-10 mr-10">
        <div className="relative mt-11 ">
          <h1 className=" text-white font-bold text-4xl ">Edvora</h1>
          <h2 className=" text-edvora-greyFont h-[30px] mt-4 w-[97px] text-2xl font-medium ">Products</h2>
        </div>

        <div className="bg-red-500 relative h-full">
          <h3>
            product name
          </h3>
          <hr className=" bg-edvora-vector104 relative top-5 w-[970px]"/>
        </div>

      </div>
    </div>
  )
}
