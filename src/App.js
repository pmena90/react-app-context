import './App.css';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import "../node_modules/react-bootstrap-toggle/dist/bootstrap2-toggle.css";
import { Suspense } from 'react';
import AppRoutes from './Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider initialLoggedInUser="Pavel">
      <Layout startingTheme="dark">
        <div>
          <ToastContainer />
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
