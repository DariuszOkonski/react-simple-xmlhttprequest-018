import React from 'react';

const ButtonController = (props) => {
  return (
    <div>
      <button
        onClick={props.fetchClick}
      >Fetch Api</button>

      <button
        onClick={props.resetClick}
      >Reset</button>
    </div>
  );
}

export default ButtonController;