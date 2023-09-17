import { React, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import css from '../Catalog/Catalog.module.css'
import svg from '../../images/symbol-defs.svg'



export default function Favourite() {

    const [favourItems, setFavourItems] = useState([]);
    
    useEffect(() => {
      setFavourItems(JSON.parse(localStorage.getItem('items')));  
}, []);
 console.log('на избранных:', favourItems);


    
    
   const handleBtnFavRemoveClick = (id) => {
     setFavourItems(favourItems.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favourItems));
         console.log('после удаления из избр:', favourItems);
    }
    

return (
       <div>
           <ul className={css.allCarsCardList}>
               
            {favourItems.map(({ id, address, rentalCompany, year, type,
                model, img, make, rentalPrice, accessories, photoLink }) => {
                
                const showAddress = address.replace(/[,]/g, '').split(' ').splice(-2)
                const carId = nanoid();
               
                return (<div className={css.carsCardMainWrapper}>
                    <li key={carId} className={css.carsCardItem}>
                        <img src={img ? `${img}` : `${photoLink}`} alt={model} className={css.imagecarsCardItem} />
                        
                        <button type="button"  onClick={() => handleBtnFavRemoveClick(id)} className={css.btnFavorite}>
                            <svg width="18" height="18" className={css.svgRemoveFavorite}>
                                <use href={`${svg}#icon-heart`}></use>
                            </svg>
                        </button>              

                        <div className={css.carsCardInfoTopWrap}>
                                <p className={css.make}>{make}<span className={css.model}>{model}</span>,</p>
                                <p className={css.year}>{year}</p>
                                <p className={css.price}>{rentalPrice}</p>
                        </div>
                        <div className={css.carsCardInfoWrap}>
                            <p className={css.carInfoText}>{showAddress.splice(0)} <span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{showAddress.splice(1)} </p>
                            <p className={css.carInfoText}>{rentalCompany} </p>
                        </div>
                        <div className={css.carsCardInfoBottomWrap}>
                            <p className={css.carInfoText}>{type}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{id}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{accessories[0]}</p>
                        </div>   
                        
                       
                            <button type="button" className={css.cardBtnLearnMore}>Learn more</button>
                  
                  </li></div>) 
            })
            }  
           </ul>
           
           
     </div>
  );







}
 
