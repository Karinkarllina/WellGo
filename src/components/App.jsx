import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const NotFound = lazy(() => import('../pages/NotFound'));


export const App = () => {
  return (
        <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<Layout/>}> 
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" index element={<HomePage />} redirectTo="/catalog"/>
                <Route path="/catalog" element={ <CatalogPage />} redirectTo="/favorite"/>   
                <Route path='/favorite' element={ <FavoritePage />} redirectTo="/catalog"  />  
                <Route path='*' element={<NotFound/>} />  
              </Route>
          </Routes>
        </Suspense>
  );
};