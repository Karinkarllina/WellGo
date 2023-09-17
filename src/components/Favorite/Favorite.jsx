import { React, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import css from '../Catalog/Catalog.module.css';
import svg from '../../images/symbol-defs.svg';
import Modal from "components/Modal/Modal.jsx";
import ModalCar from "components/ModalCar/ModalCar.jsx";



export default function Favourite() {

    const [favouriteCars, setFavouriteCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idModal, setIdModal] = useState('');
    
    useEffect(() => {
      setFavouriteCars(JSON.parse(localStorage.getItem('items')));  
}, []);

    
   const handleRemoveFavorite = (id) => {
     setFavouriteCars(favouriteCars.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favouriteCars));
    }

    const modalOpen = (id) => {
          setShowModal(true);
          const item = favouriteCars.find(item => item.id === id);
          setIdModal(item);

    };

  const modalClose = () => {
    setShowModal(false);
    };


return (
       <div>
           <ul className={css.allCarsCardList}>
               
            {favouriteCars && (favouriteCars.map(({ id, address, rentalCompany, year, type,
                model, img, make, rentalPrice, accessories, photoLink }) => {
                
                 const location = address.split(',');
                const carId = nanoid();
               
                return (<div className={css.carsCardMainWrapper}>
                    <li key={carId} className={css.carsCardItem}>
                        <img src={img ? `${img}` : `${photoLink}`} alt={model} className={css.imagecarsCardItem} />
                        
                        <button type="button"  onClick={() => handleRemoveFavorite(id)} className={css.btnFavorite}>
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
                            <p className={css.carInfoText}>{location[1]} <span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{location[2]} </p>
                            <p className={css.carInfoText}>{rentalCompany} </p>
                        </div>
                        <div className={css.carsCardInfoBottomWrap}>
                            <p className={css.carInfoText}>{type}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{id}<span className={css.borderInfoCard}></span></p>
                            <p className={css.carInfoText}>{accessories[0]}</p>
                        </div>   
                        
                       
                        <button type="button" className={css.cardBtnLearnMore} onClick={() => modalOpen(id)}>Learn more</button>
                  
                  </li></div>) 
            })
           ) }  
           </ul>
            {showModal && (
                <Modal onClose={modalClose}>
                    <ModalCar data={idModal}/>
                </Modal>
            )}  
           
     </div>
  );







}
 
