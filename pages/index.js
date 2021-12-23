import React, { useState, useEffect } from 'react';
import FilterContainer from '../components/Filter/FilterContainer';
import CarouselContainer from '../components/Carousel/CarouselContainer';

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({});

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

  useEffect(() => {
    let filtered = [];
    let statesAvailable = new Set();
    let citiesAvailable = new Set();

    if(filter.Product) {
      data.forEach(item => {
        if (item.brand_name === filter.Product) {
          filtered.push(item);
          statesAvailable.add(item.address.state);
          citiesAvailable.add(item.address.city);
        }
      })
      // console.log('s: ',statesAvailable,'c: ', citiesAvailable)
      setStates([...statesAvailable]);
      setCities([...citiesAvailable]);
    }

    setFilteredData(filtered)
  }, [filter])

  // handle case where we dont have filtered data or client picks a city that isnt in the state
  // useEffect(() => {
  //   if(filteredData.length === 0) {
  //     alert('No options in desired specification, resetting filters')
  //   }
  // }, [filteredData])


  return (
    <div className="flex bg-edvora-greyCard min-h-screen min-w-screen">
      <div name="filter-container">
        <FilterContainer data={data} products={products} states={states} cities={cities} filter={filter} setFilter={setFilter}/>
      </div>
      {/* Main Content Containers */}
      <div className="lg:p-10 lg:relative lg:left-20 lg:w-[100vw]">
        <div className="top-8">
          <h1 className=" text-white font-bold text-4xl max-h-12 w-[150px]">Edvora</h1>
          <h2 className=" text-edvora-greyFont h-15 w-[97px] text-2xl font-medium relative top-8 ">Products</h2>
        </div>
        <div className=" lg:min-h-[80vh] lg:w-[70vw] md:min-h-[80vh] md:w-[60vw]  ">
          <div className=" lg:min-h-[80%] lg:w-[70vw] lg:space-y-20 md:spaye-y-20">
            <CarouselContainer filteredData={filteredData} />
            <CarouselContainer filteredData={filteredData} />
          </div>
        </div>
      </div>
    </div>
  )
}
