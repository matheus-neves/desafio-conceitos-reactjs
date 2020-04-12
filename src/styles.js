import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body {
    font-size: 14px;
  }

  div {
    width: 100%;
    margin: 20px;
  }

  div li {
    display: flex;
    align-items: center;
  }

  div li + li {
    margin-top: 15px;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 15px;
    font-weight: bold;
    font-size: 14px;
  }

  div li button {
    margin: 0 15px;
    background: #ca4949;
  }

`;

