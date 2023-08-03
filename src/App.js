import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import "../node_modules/react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatchPage from './components/NoMatchPage';
import AppRoutes from './Routes';


function App() {
  return (
    <AuthProvider initialLoggedInUser="Pavel">
      <Layout startingTheme="dark">
        <div>
          <Header />
          <Suspense fallback={<div className="container">Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
