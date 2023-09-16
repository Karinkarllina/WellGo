import { NavLink } from 'react-router-dom';

const NotFound = () => {

    return (
        <div>
            <p>Hello! Its NotFound!</p>
            <p>
                <NavLink to="/home">Link HomePage</NavLink>
            </p>
        </div>
    )
}

export default NotFound;