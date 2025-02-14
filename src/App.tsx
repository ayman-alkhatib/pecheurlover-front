import React, {useState} from 'react';
import './App.css';
import Dashboard from "./pages/B_body/Dashboard";
import ProductDetails from "./pages/B_body/ProductDetails";
import RecapDetails from "./pages/B_body/RecapDetails";
import AdminListOrders from "./pages/B_body/AdminListOrders";
import Home from "./pages/B_body/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import LayoutWithBar from "./components/layouts/LayoutWithBar";
import LayoutWithoutBar from "./components/layouts/LayoutWithoutBar";
import { AuthContext } from './context/AuthContext';
import {ShoppingCartProvider} from "./components/dashbaordBody/shoppingCart/ShoppingCartContext";
import ListOrders from "./pages/B_body/ListOrders";

function App() {
    const [isLogged, setIsLogged] = useState(false);
  return (
      <>
          <BrowserRouter>
              <HelmetProvider>
                  <AuthContext.Provider value={{isLogged, setIsLogged}}>
                      <ShoppingCartProvider>
                      <Routes>
                          {isLogged ?
                              <Route path="/" element={<LayoutWithBar/>}>
                                  <Route path="dashboard" element={<Dashboard/>}/>
                                  <Route path="/product/:id" element={<ProductDetails/>}/>
                                  <Route path="recapOrder" element={<RecapDetails/>}/>
                                  <Route path="adminListOrders" element={<AdminListOrders/>}/>
                                  <Route path="listOrders" element={<ListOrders/>}/>
                                  <Route path="/" element={<Home/>}/>
                              </Route>
                          :
                              <Route path="/" element={<LayoutWithoutBar/>}>
                                  <Route path="/" element={<Home/>}/>
                              </Route>
                          }
                      </Routes>
                    </ShoppingCartProvider>
                  </AuthContext.Provider>
              </HelmetProvider>
          </BrowserRouter>
      </>
  );
}

export default App;
