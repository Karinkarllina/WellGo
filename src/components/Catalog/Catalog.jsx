import { React, useEffect, useState } from "react";
import fetchCars from "../../Fetch/FetchCars.js";
import LoadMore from '../LoadMore/LoadMore.jsx';
import { nanoid } from 'nanoid'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Catalog.module.css'
import Filter from "components/Filter/Filter.jsx";
import svg from '../../images/symbol-defs.svg';



export default function Catalog() {

    const [carCards, setCarCards] = useState([]);
    const [carCardsPage, setCarCardsPage] = useState([]);
    const [page, setPage] = useState(1);
    const [allCarCards, setAllCarCards] = useState([]);
    const [isShowToggleAdd, setIsShowToggleAdd] = useState(true);  

   
    
    useEffect(() => {
        fetchCars()
            .then(response => {
                setAllCarCards(response.data);
            })
            .catch(error => {
                Notify.info("Ooops! Not found");
            });
    }, []);


    useEffect(() => { 
        fetchCars(page, 8)
            .then(cars => {
                setCarCardsPage(cars.data);
                setCarCards(prev => [...prev, ...cars.data]);
        })
            .catch(error => {
                console.log(error)
                Notify.info("Ooops! Not found");
            });
    }, [page]);



    const buttonLoadMore = () => {
        setPage(prev => (prev + 1 ));
    }
    
    const handleAddFavorite = () => {
        console.log("Add");
        setIsShowToggleAdd(false);
    }
    const handleRemoveFavorite = () => {
        console.log("Remove");
        setIsShowToggleAdd(true)
    }

   return (
       <div>
           <Filter allCarCards={allCarCards}/>


           <ul className={css.allCarsCardList}>
               
            {carCards.map(({ id, address, rentalCompany, year, type,
                model, img, make, rentalPrice, accessories, photoLink }) => {
                
                const showAddress = address.replace(/[,]/g, '').split(' ').splice(-2)
                const carId = nanoid();
               
                return (<div className={css.carsCardMainWrapper}>
                    <li key={carId} className={css.carsCardItem}>
                        <img src={img ? `${img}` : `${photoLink}`} alt={model} className={css.imagecarsCardItem} />
                        {isShowToggleAdd ? 
                        <button type="button" onClick={handleAddFavorite} className={css.btnFavorite}>
                            <svg width="18" height="18">
                                <use href={`${svg}#icon-heart-1`}></use>
                            </svg>                            
                        </button> :
                        <button type="button"onClick={handleRemoveFavorite} className={css.btnFavorite}>
                            <svg width="18" height="18" className={css.svgRemoveFavorite}>
                                <use href={`${svg}#icon-heart`}></use>
                            </svg>
                        </button>              
}

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
           
           {carCardsPage.length >= 8 && <div className={css.bntLoadWrap}><LoadMore onClick={buttonLoadMore}/></div> }
           
     </div>
  );
}