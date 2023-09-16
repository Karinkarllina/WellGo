import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return (
        <div>
            <p>Hello! Its HomePage!</p>
            <p>
                <NavLink to="/catalog">Link CatalogPage</NavLink>
            </p>
        </div>
    )
}

export default HomePage;