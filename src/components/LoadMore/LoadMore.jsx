import css from './LoadMore.module.css';

const LoadMore = ({ onClick }) => (
   <button         
      className={css.buttonLm}      
      type="button"
      onClick={onClick}
   >
      Load more         
   </button>
)

export default LoadMore;