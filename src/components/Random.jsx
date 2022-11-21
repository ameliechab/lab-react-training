import React from 'react';

function Random({ min, max }) {
  return <p>{Math.floor(Math.random() * (max - min) + min)}</p>;
}

export default Random;
