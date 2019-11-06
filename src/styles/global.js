import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box
  }
  html,body,#root{
    min-height: 100%;
  }

  body{
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased !important;
    font: 1em Roboto, sans-serif;
  }

  #root{
  max-width: 960px;
  margin: 0 auto;
}
`;
