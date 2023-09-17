import css from './pages.module.css';
import Catalog from 'components/Catalog/Catalog';


const CatalogPage = () => {

    return (
        <div className={css.catalogSection}>
            <Catalog/>
        </div>
    )
}

export default CatalogPage;