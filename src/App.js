import React from 'react';

import {GlobalStyle} from "./Styles/GlobalStyles";

import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const App=()=>{
  return (
    <>
        <GlobalStyle />
        <Navbar />
        <Banner />
    </>
  )
}

export default App;
