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
      <div className="bg-red-500 md:bg-green-500  lg:bg-blue-500 ml-10 ">
        <FilterContainer data={data} products={products} states={states} cities={cities} />
      </div>

      {/* Main Content Containers */}
      <div className=" bg-purple-500">

        {/* Headers Containers */}
        <div className="relative pt-11 pb-4 lg:bg-red-200 ">
          <h1 className=" text-white font-bold text-4xl ">Edvora</h1>
          <h2 className=" text-edvora-greyFont h-[30px] pt-4 w-[97px] text-2xl font-medium ">Products</h2>
        </div>

        {/* Product Carosel Containers */}
        <div className=" h-[90vh] min-w-[75vw] bg-yellow-500 pt-8 ">
          <div className=" min-h-[50%] bg-green-500 border-4 border-white">
            <h3 className="font-normal text-xl ">
              Product Name
            </h3>
            <hr className=" bg-edvora-vector104 relative top-3 "/>
            <div className="bg-black ">
              rectangle container
            </div>
          </div>

          <div className="min-h-[50%]  bg-green-500 border-4 border-white">
            <h3 className="font-normal text-xl ">
              Product Name
            </h3>
            <hr className=" bg-edvora-vector104 relative top-3 "/>
            <div className="bg-black ">
              rectangle container
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
