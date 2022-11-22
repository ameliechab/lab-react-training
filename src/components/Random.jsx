import React from 'react';

function Random({ min, max }) {
  return (
    <p class="random-values">
      Random value between {min} and {max} = {''}
      {Math.floor(Math.random() * (max - min) + min)}
    </p>
  );
}

export default Random;
