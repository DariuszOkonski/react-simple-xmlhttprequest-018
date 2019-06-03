import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h2>XmlHttpRequest App</h2>
      <h5>API from - {props.api}</h5>
    </div>
  );
}

export default Header;