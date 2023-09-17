import css from './Modal.module.css';
import svg from '../../images/symbol-defs.svg';
import  { React, useEffect } from "react";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  

   useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
         onClose();
         document.body.style.overflow = 'visible'; 
      };
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => window.removeEventListener('keydown', handleKeyDown);

   }, [onClose]);
 
   const handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
         onClose();
         document.body.style.overflow = 'visible'; 
      };
   };

   document.body.style.overflow = 'hidden';  

   return (
      createPortal(<div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
               <div className={css.closebtn} onClick={onClose} >
                  <svg className={css.icon} width="18" height="18">
                      <use href={`${svg}#icon-x`}></use>
                  </svg>
               </div>
                  {children}
            </div>
      </div>, modalRoot)
         
   )
};

export default Modal;