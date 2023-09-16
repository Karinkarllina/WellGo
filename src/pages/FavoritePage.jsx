import { NavLink } from 'react-router-dom';

const FavoritePage = () => {

    return (
        <div>
            <p>Hello! Its FavoritePage!</p>
            <p>
                <NavLink to="/catalog">Link CatalogPage</NavLink>
            </p>
        </div>
    )
}

export default FavoritePage;