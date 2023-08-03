import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoMatchPage from './components/NoMatchPage';
import { lazy } from 'react';

const StarMatch = lazy(() => import('./components/StarMatch'));

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/star-game" element={<StarMatch />} />
                <Route path="*" element={<NoMatchPage />} />
            </Routes>
        </>
    );
};

export default AppRoutes;