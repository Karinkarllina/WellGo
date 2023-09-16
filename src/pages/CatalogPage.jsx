import { NavLink } from 'react-router-dom';
import Catalog from 'components/Catalog/Catalog';


const CatalogPage = () => {

    return (
        <div>
            <p>Hello! Its CatalogPage!</p>
            <p>
                <NavLink to="/favorite">Link FavoritePage</NavLink>
            </p>
            <Catalog/>
        </div>
    )
}

export default CatalogPage;