import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    min-height: 100%;
    background: #202020;

  }
  *, button, input{
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  ul{
    list-style: none;
    padding-left: 0;
  }

`