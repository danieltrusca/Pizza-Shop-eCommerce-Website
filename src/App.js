import React from 'react';

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

const App=()=>{
  return (
    <>
      <GlobalStyle />
        <h3>gzfdfsgsdfgd</h3>
    </>
  )
}

export default App;
