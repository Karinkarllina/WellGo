// import css from './Filter.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Filter = ({allItems}) => {

    const [isOpenBrands, setIsOpenBrands] = useState(false);  
    const [isOpenPrice, setIsOpenPrice] = useState(false);  
    const [selectedCarBrand, setSelectedCarBrand] = useState('');
    const [selectedCarPrice, setSelectedCarPrice] = useState('');
    const [mileageValueFrom, setMileageValueFrom] = useState('');
    const [mileageValueTo, setMileageValueTo] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const filter = {
            make: selectedCarBrand,
            rentalPrice: selectedCarPrice,
            mileageFrom: mileageValueFrom,
            mileageTo: mileageValueTo,

        }
        localStorage.setItem('filter', JSON.stringify(filter));
    }
    
    const filterMakes = allItems.map(item => item.make)
        .filter((make, index, array) => array
        .indexOf(make) === index
    );
    
    const makePriceArr = () => {
    const list = [];
        for (let i = 10; i <= 500; i += 10) {
        list.push(i);
    };
        return list;
    };
    const priceArr = makePriceArr();
    

  const handleBrandСlick = (option) => {
      setIsOpenBrands(false);
      setSelectedCarBrand(option)
    };
    
      const handlePriceСlick = (option) => {
        setIsOpenPrice(false);
        setSelectedCarPrice(option);
  };

    const hadleMileageValueFromChange = (event) => {
        const value = event.target.value;
        setMileageValueFrom(value);
    }
    
    const hadleMileageValueToChange = (event) => {
        const value = event.target.value;
        setMileageValueTo(value);
   }
    
      return (
      <div >
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="brand">Car brand</label>
            <input
                type="text"
                name='brand'
                id='brand'
                placeholder="Enter the text"    
                value={selectedCarBrand}
                onChange={(event) => setSelectedCarBrand(event.target.value)}            
            />
            <button
              type="button"
              aria-label="arrow"
              onClick={() => setIsOpenBrands(!isOpenBrands)}
            >
            </button>
                {isOpenBrands && (
                          <ul>
                              {filterMakes.map((make) => {
                                  const optId = nanoid()
                                      return <li key={optId} onClick={() => handleBrandСlick(`${make}`)}>
                                      {make}
                                  </li>
                              })}
    
                    </ul>           
                )}
        </div>

        <div>
          <label htmlFor="price">Price/ 1 hour</label>
          <input
            type="text"
            name='price'
            id='price'
            placeholder="To $"
            value={selectedCarPrice}
            onChange={(event) => setSelectedCarPrice(event.target.value)} 
          />
            <button
                type="button"
                aria-label="arrow"
                onClick={() => setIsOpenPrice(!isOpenPrice)}
            >
            </button>
                {isOpenPrice && (
                          <ul>
                              {priceArr.map((price) => {
                                  const optId = nanoid()
                                      return <li key={optId} onClick={() => handlePriceСlick(`${price}`)}>
                                      {price}
                                  </li>
                              })}
                    </ul>           
                )}
          </div>

        <div>
          <label htmlFor="price">Сar mileage / km</label>
          <input 
            type="number" 
            id='mileage'
            name="mileageFrom" 
            placeholder="From"
            value={mileageValueFrom}
            onChange={hadleMileageValueFromChange} 
          />
          <input 
            type="number" 
            id='mileage'
            name="mileageTo" 
            placeholder="To"
            value={mileageValueTo}
            onChange={hadleMileageValueToChange} 
          /> 
        </div>    
           
        <button type="submit">Search</button>
        </form>
          </div>
          
  );
}



export default Filter;






















