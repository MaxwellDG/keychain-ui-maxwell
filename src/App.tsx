import React, { Suspense } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import { ProviderComponentWrapper } from "./components/provider-component-wrapper";
import AppRoutes from "./AppRoutes";
import './assets/fonts/BlenderPro/fonts.css';
import './assets/fonts/Industry/Industry/stylesheet.css';



function App() {
  return (
      <HelmetProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
            <ToastContainer position="top-right" autoClose={3000} />
            <ProviderComponentWrapper component={<AppRoutes />} />
        </Suspense>
      </HelmetProvider>
  );
}

export default App;
