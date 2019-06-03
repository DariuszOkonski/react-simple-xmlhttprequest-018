import React from 'react';
import SingleApi from './SingleApi';

const DisplayApi = (props) => {
  const displayMembers = props.api.map(element =>
    <SingleApi
      key={element.id}
      element={element}
    />);

  return (
    <div>
      <ul>
        {displayMembers}
      </ul>
    </div>
  );
}

export default DisplayApi;