import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 14px;
  -webkit-font-smoothing: antialiased; 
  height: 100%;
  color: #292E35;
  margin: 0;
}
box-sizing: border-box;

*,
*:before,
*:after {
  font-family: 'Nunito', sans-serif;
  box-sizing: inherit;
}

.ant-layout {
  background: white;
}

h1,
h2,
h3,
h4,
h5,
a,
p {
  margin: 0;
  padding: 0;
}
h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
p {
  font-weight: 400;
  line-height: 20px;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

button,
a {
  cursor: pointer;
}

input {
  font-weight: 500;
  size: 14px;
  color: #292e35;
  width: 100%;
  border-radius: 2px;
  padding-left: 12px;
}
 `

export default GlobalStyle
