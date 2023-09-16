import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from '../Spinner/Spinner';
import Header from 'components/Header/Header';


const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Outlet />  
                </Suspense>    
            </main>
        </div>
    )
}

export default Layout;