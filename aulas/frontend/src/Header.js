import React from 'react';

//Componente Header
function Header(props) {
  return(
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

export default Header;