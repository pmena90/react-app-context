import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoMatchPage from './components/NoMatchPage';
import { lazy } from 'react';

const StarMatch = lazy(() => import('./components/StarMatch'));
const GitHubCards = lazy(() => import('./components/GitHubCards'));

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/star-game" element={<StarMatch />} />
                <Route path="/github-cards" element={<GitHubCards />} />
                <Route path="*" element={<NoMatchPage />} />
            </Routes>
        </>
    );
};

export default AppRoutes;