import { React, useEffect, useState } from "react";
import fetchCars from "../../Fetch/FetchCars.js";
import LoadMore from '../LoadMore/LoadMore.jsx';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Catalog.module.css'
import Filter from "components/Filter/Filter.jsx";
import svg from '../../images/symbol-defs.svg';
import Modal from "components/Modal/Modal.jsx";
import ModalCar from "components/ModalCar/ModalCar.jsx";



export default function Catalog() {

    const [carCards, setCarCards] = useState([]);
    const [carCardsPage, setCarCardsPage] = useState([]);
    const [page, setPage] = useState(1);
    const [allCarCards, setAllCarCards] = useState([]);
    const [favouriteCars, setFavouriteCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idModal, setIdModal] = useState('');


    useEffect(() => {
        fetchCars()
            .then(response => {
                setAllCarCards(response.data);
            })
            .catch(error => {
                Notify.info("Ooops! Not found");
            });
        setFavouriteCars(JSON.parse(localStorage.getItem('items'))); 

        if (favouriteCars) {
            setFavouriteCars(favouriteCars);
        }

    }, [favouriteCars]);


    useEffect(() => { 
        fetchCars(page, 8)
            .then(cars => {
                setCarCardsPage(cars.data);
                setCarCards(prev => [...prev, ...cars.data]);
        })
            .catch(error => {
                console.log(error);
                Notify.info("Ooops! Not found");
            });
    }, [page]);



    const buttonLoadMore = () => {
        setPage(prev => (prev + 1 ));
    }
   

    const handleAddFavorite = (id) => {
            const item = allCarCards.find(item => item.id === id);
            setFavouriteCars(prev => ([...prev, item]));
            localStorage.setItem('items', JSON.stringify(favouriteCars));
       

    }


    const handleRemoveFavorite = (id) => {
        setFavouriteCars(favouriteCars.filter(item => item.id !== id));
        localStorage.setItem('items', JSON.stringify(favouriteCars));
        
    }
    
      const modalOpen = (id) => {
          setShowModal(true);
          const item = allCarCards.find(item => item.id === id);
          setIdModal(item);

    };

  const modalClose = () => {
    setShowModal(false);
    };
    

   return (
       <div>
           <Filter allCarCards={allCarCards}/>

           <ul className={css.allCarsCardList}>
               
            {carCards.map(({ id, address, rentalCompany, year, type,
                model, img, make, rentalPrice, accessories, photoLink }) => {
                
                 const location = address.split(',');
                const carId = nanoid();
               
                return (<div className={css.carsCardMainWrapper}>
                    <li key={carId} className={css.carsCardItem}>
                        <img src={img ? `${img}` : `${photoLink}`} alt={model} className={css.imagecarsCardItem} />

                        {favouriteCars && (
                            favouriteCars.find(item => item.id === id) ?
                                (
                                    <button type="button" onClick={() => handleRemoveFavorite(id)} className={css.btnFavorite}>
                                        <svg width="18" height="18">
                                            <use href={`${svg}#icon-heart`}></use>
                                        </svg>
                                    </button>
                                ) :
                                (<button type="button" onClick={() => handleAddFavorite(id)} className={css.btnFavorite}>
                                    <svg width="18" height="18" className={css.svgRemoveFavorite}>
                                        <use href={`${svg}#icon-heart-1`}></use>
                                    </svg>
                                </button>)
                        )}

                        <div className={css.carsCardInfoTopWrap}>
                                <p className={css.make}>{make}<span className={css.model}>{model}</span>,</p>
                                <p className={css.year}>{year}</p>
                                <p className={css.price}>{rentalPrice}</p>
                        </div>
                        <div className={css.carsCardInfoWrap}>
                            <p className={css.carInfoText}>{location[1]} <span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{location[2]} <span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{rentalCompany} </p>
                        </div>
                        <div className={css.carsCardInfoBottomWrap}>
                            <p className={css.carInfoText}>{type}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{id}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{accessories[0]}</p>
                        </div>   
                        
                       
                            <button type="button" className={css.cardBtnLearnMore} onClick={() => modalOpen(id)}>Learn more</button>
                  
                    </li>
                </div>) 
            })
            }  
           </ul>
           
           {carCardsPage.length >= 8 && <div className={css.bntLoadWrap}><LoadMore onClick={buttonLoadMore}/></div> }
            {showModal && (
                <Modal onClose={modalClose}>
                           <ModalCar data={idModal}/>
                </Modal>
            )}  
     </div>
  );
}