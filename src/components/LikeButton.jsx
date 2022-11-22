import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const copyColor = [...colors];
  const [color, setColor] = useState(copyColor);
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() =>
        setCount(count + 1) ||
        setColor(copyColor[Math.floor(Math.random() * copyColor.length)])
      }
    >
      {count} likes
    </button>
  );
};

export default LikeButton;
