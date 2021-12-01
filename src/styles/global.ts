import { createGlobalStyle } from 'styled-components';
// import './sass/_init.scss';
// import './sass/plugins.dark.scss';
// import './sass/plugins.scss';
// import './sass/style.dark.scss';
// import './sass/style.react.scss';
// import './sass/style.scss';

export default createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
:root {
  --primary100: #F0F1F5;
  --primary200: #A6ACC1;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
}

a {
  text-decoration: none;
}

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  /* font-family: 'Inter', sans-serif; */
  font-family: 'Poppins', sans-serif;
  background: #f3f3f7;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}


`;
