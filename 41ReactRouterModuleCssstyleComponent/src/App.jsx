import React from 'react';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  body {
    font-family: Arial, sans-serif;
  }
li{
  list-style-type: none;}

  .container{
  margin: 0 auto;
  max-width: 85%;}
.active{
color:white}
  }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div>
                <Home />
            </div>
        </>
    );
}

export default App;
