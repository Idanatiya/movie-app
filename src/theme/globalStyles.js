import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html,body {
  width: 100%;
  height: 100%;
}



body {
  overflow-x: hidden;
  margin: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

ul {
  list-style-type: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

`;


export default GlobalStyle