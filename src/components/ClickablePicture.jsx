import React, { useState } from 'react';
import MaxenceImage from '../assets/images/maxence.png';
import MaxenceGlassImage from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [normalImage, setNormalImage] = useState(MaxenceImage);
  return (
    <img
      src={normalImage}
      alt="Maxence"
      onClick={() => setNormalImage(MaxenceGlassImage)}
    />
  );
};

export default ClickablePicture;
