import React from 'react';

import {GlobalStyle} from "./Styles/GlobalStyles";

import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Menu from "./Menu/Menu";
import FoodDialog from "./FoodDialog/FoodDialog";
import Order from "./Order/Order";

import {useOpenFood} from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";

const App=()=>{
  const openFood=useOpenFood();
  const orders=useOrders();
  useTitle({...openFood, ...orders});
  return (
    <>
        <GlobalStyle />
        <FoodDialog {...openFood} {...orders} />
        <Navbar />
        <Order {...openFood} {...orders} />
        <Banner />
       
        <Menu {...openFood} />
    </>
  )
}

export default App;
