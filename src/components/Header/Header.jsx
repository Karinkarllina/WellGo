import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = () => {

    return (
            <header className={css.headerWrap}>
            <nav className={css.headerNav}>
                <ul className={css.headerHomeList}>
                    <li className={css.headerHomeItem}>
                        <NavLink to="/" className={css.headerCarItemText}>Home</NavLink>
                    </li>
                </ul>
                <ul className={css.headerCarList}>
                    <li className={css.headerCarItem}>
                        <NavLink to="/catalog" className={css.headerCarItemText}>Catalog</NavLink>
                    </li>
                    <li className={css.headerCarItem}>
                        <NavLink to="/favorite" className={css.headerCarItemText}>Favorite</NavLink>
                    </li>
                </ul>
            </nav>
            </header>
    )
}

export default Header;