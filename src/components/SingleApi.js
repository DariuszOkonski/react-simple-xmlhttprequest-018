import React from 'react';

const SingleApi = (props) => {
  const { name, email, phone, website } = props.element;

  return (
    <li>
      <h4>Name: {name}</h4>
      <p><span>Email:</span> {email}</p>
      <p><span>Phone:</span> {phone}</p>
      <p><span>Website:</span> {website}</p>
    </li>
  );
}

export default SingleApi;