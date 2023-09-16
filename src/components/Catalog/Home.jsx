// import { Box} from '@mui/material';
import css from './Home.module.css'
// import 'animate.css';
// import bgImage from '../../images/phonebookImg.jpg';
import fetchApi from '../../services/fetchData';
import { React, useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import {ButtonLoadMore} from '../ButtonLoadMore';

export default function Home() {
   const [itemsToShow, setItemsToShow] = useState([]);
   const [itemsOnPage, setItemsOnPage] = useState([]);
   const [page, setPage] = useState(1);
   const [allItems, setAllItems] = useState([]);
// let itemsPerPage = 8;
   
    useEffect(() => {
   fetchApi()
      .then(resp => {
         setAllItems(resp.data);
      })
         .catch(error => {
            console.log(error)
            Notify.info("404 page not found".toUpperCase());
         });
}, []);
         console.log(allItems)


    useEffect(() => { 
         fetchApi(page, 8)
            .then(advert => {
            setItemsOnPage(advert.data);
            setItemsToShow(prev => [...prev, ...advert.data]);

            // setitemsToShow(advert.data);
            // console.log(advert.data);
;
      })
         .catch(error => {
            console.log(error)
            Notify.info("404 page not found".toUpperCase());
         });
    }, [page]);
   // const start = itemsPerPage * page;
   // const end = start + itemsPerPage;
   // const paginatedData = itemsToShow.slice(start, end);
   const hadleBtnLoadMore = () => {
   setPage(prev => (prev + 1 ));
   }
// const filteredToPrice = allItems.filter(item => item.rentalPrice.substring(1) <= 50);//фильтр по цене ОТ
   // const filtereByPrice = [...itemsToShow].sort((a, b) => a.rentalPrice.substring(1) - b.rentalPrice.substring(1));//сортировка от деш
   // const filteredByMake = allItems.filter(item => item.make === 'Subaru');//фильтр по марке

   console.log(itemsToShow);
   // console.log(page);


   return (
      <div>
         <ul className={css.imageGallery}>
            {itemsToShow.map(({ id, address, rentalCompany, year, type,
               model, img, make, rentalPrice, accessories, photoLink }) => {
               const shortAddress = address.replace(/[,]/g, '').split(' ').splice(-2)
               const Itemid = nanoid();
               return <li
                  key={Itemid}
                  className={css.imageGalleryItem}
               >
                   <img
                     className={css.imageGalleryItemImg}
                     src={img ? `${img}` : `${photoLink}`} alt={model} />
                  {/* <span>{address.split(' ').splice(-1)}</span> */}
                  <span>{make}</span>
                  <span>{model}</span>
                  <span>{year}</span>
                  <span>{rentalPrice}</span>
                  <span>{shortAddress.splice(0)}</span>
                  <span>{shortAddress.splice(1)}</span>
                  <span>{rentalCompany}</span>
                  <span>{type}</span>
                  <span>{id}</span>
                  <span>{accessories[0]}</span>

                  </li> 
            })
            }  
         </ul>
         {itemsOnPage.length >= 8 && <ButtonLoadMore onClick={hadleBtnLoadMore} />}
     </div>
   //   <Box
   //      className={css.wrapper}
   //    sx={{
   //          backgroundImage: `url(${bgImage})`,
   //          backgroundSize: 'cover',
   //          backgroundPosition: 'center center',
   //          backgroundRepeat: 'no-repeat',
   //         }}>        
   //  </Box>
  );
}