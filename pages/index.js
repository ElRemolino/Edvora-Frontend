import React, { useState, useEffect } from 'react';
import FilterContainer from '../components/Filter/FilterContainer';
import CarouselContainer from '../components/Carousel/CarouselContainer';

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
        <div className="lg:min-h-[80vh] lg:max-w-[50vw]">
          <div className=" space-y-20">
            <CarouselContainer />
            <CarouselContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
