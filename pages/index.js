import React, { useState, useEffect } from 'react';
import FilterContainer from '../components/Filter/FilterContainer';
import CarouselContainer from '../components/Carousel/CarouselContainer';

export default function Home() {
  const [data, setData] = useState([]);
  //data sent to carousel
  const [filteredData, setFilteredData] = useState([]);
  //determins filter options on render
  const [products, setProducts] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  //state for which filter was chosen
  const [productFilter, setProductFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

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

  //handles if user picks new product
  useEffect(() => {
    applyProductFilter();
    applyStateFilter();
    applyCityFilter();
  }, [productFilter, stateFilter, cityFilter])

  //handle if user picks a new state

  //handle when user picks a city
  const applyCityFilter = () => {
    let filteredCities = [];
    filteredData.forEach(item => {
      if(item.address.city === cityFilter){
        filteredCities.push(item);
      }
    })

    setFilteredData(filteredCities);
    // applyProductFilter();
  }

  const applyStateFilter = () => {
    let filteredProducts = [];
    let statesAvailable = new Set();
    let citiesAvailable = new Set();

    if(productFilter !== '' && stateFilter !== '') {
      filteredData.forEach(item => {
        if (item.brand_name === productFilter && item.address.state === stateFilter) {
          console.log('test', item)
          filteredProducts.push(item);
          statesAvailable.add(item.address.state);
          citiesAvailable.add(item.address.city);
        }
      });
    }
    setStates([...statesAvailable]);
    setCities([...citiesAvailable]);
    setFilteredData(filteredProducts);
    console.log('filteredprod', filteredProducts, 'filteredData',filteredData);
  }

  const applyProductFilter = () => {
    let filteredProducts = [];
    let statesAvailable = new Set();
    let citiesAvailable = new Set();

    if(productFilter !== '') {
      data.forEach(item => {
        if (item.brand_name === productFilter) {
          filteredProducts.push(item);
          statesAvailable.add(item.address.state);
          citiesAvailable.add(item.address.city);
        }
      })
      // console.log('s: ',statesAvailable,'c: ', citiesAvailable)
      setStates([...statesAvailable]);
      setCities([...citiesAvailable]);
      setFilteredData(filteredProducts);
    }
  }



  return (
    <div className="flex bg-edvora-greyCard min-h-screen min-w-screen">
      <div name="filter-container" className=" flex">
        <FilterContainer data={data} products={products} states={states} cities={cities} productFilter={productFilter} setProductFilter={setProductFilter} stateFilter={stateFilter} setStateFilter={setStateFilter} cityFilter={cityFilter} setCityFilter={setCityFilter} />
      </div>
      {/* Main Content Containers */}
      <div className="lg:p-10 lg:relative lg:left-20 lg:w-[100vw]">
        <div className="top-8">
          <h1 className=" text-white font-bold text-4xl max-h-12 w-[150px]">Edvora</h1>
          <h2 className=" text-edvora-greyFont h-15 w-[97px] text-2xl font-medium relative top-8 ">Products</h2>
        </div>
        <div className=" lg:min-h-[80vh] lg:w-[70vw] md:min-h-[80vh] md:w-[60vw]  ">
          <div className=" lg:min-h-[80%] lg:w-[70vw] lg:space-y-20 md:spaye-y-20">
            <CarouselContainer productFilter={productFilter} filteredData={filteredData} />
            <CarouselContainer productFilter={productFilter} filteredData={filteredData} />
          </div>
        </div>
      </div>
    </div>
  )
}
