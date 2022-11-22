import React from 'react';

function BoxColor({ r, g, b }) {
  return (
    <div class="box-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      rgb({r},{g},{b})
    </div>
  );
}

export default BoxColor;
