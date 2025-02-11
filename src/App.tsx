import React, {useState} from 'react';
import './App.css';
import Header from "./pages/A_header/Header";
import Dashboard from "./pages/B_body/Dashboard";
import Footer from "./pages/C_footer/Footer";
import ProductDetails from "./pages/B_body/ProductDetails";
import RecapDetails from "./pages/B_body/RecapDetails";
import ListOrders from "./pages/B_body/ListOrders";
import Home from "./pages/B_body/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import LayoutWithBar from "./components/layouts/LayoutWithBar";
import LayoutWithoutBar from "./components/layouts/LayoutWithoutBar";
import { AuthContext } from './context/AuthContext';

function App() {
    const [isLogged, setIsLogged] = useState(false);
  return (
      <>
          <BrowserRouter>
              <HelmetProvider>
                  <AuthContext.Provider value={{isLogged, setIsLogged}}>
                      <Routes>
                          {isLogged ?
                              <Route path="/" element={<LayoutWithBar/>}>
                                  <Route path="Dashboard" element={<Dashboard/>}/>
                                  <Route path="ProductDetails" element={<ProductDetails/>}/>
                                  <Route path="RecapDetails" element={<RecapDetails/>}/>
                                  <Route path="ListOrders" element={<ListOrders/>}/>
                                  <Route path="/" element={<Home/>}/>
                              </Route>
                          :
                              <Route path="/" element={<LayoutWithoutBar/>}>
                                  <Route path="/" element={<Home/>}/>
                              </Route>
                          }
                      </Routes>
                  </AuthContext.Provider>
              </HelmetProvider>
          </BrowserRouter>
      </>
  );
}

export default App;
