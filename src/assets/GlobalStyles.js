import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    letter-spacing: 1.5px;
    line-height: 1.7;
    font-family: 'Pretendard-Regular', serif;
    color: #4b4b4b;
    background-color: #ebecf6;
    justify-content: center;
    min-height: 100vh;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /** 토스트 **/
  .Toastify__toast-container {
    left: 520px;
  }

`;

