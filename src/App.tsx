import React, { Suspense } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import {ProviderComponentWrapper} from "./components/ProviderComponentWrapper";
import AppRoutes from "./AppRoutes";

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
