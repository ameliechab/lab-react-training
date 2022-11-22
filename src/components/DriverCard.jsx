import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <div>
        <img class="driver-car-image" src={img} alt="Driver car image" />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating children={rating} />
        <div class="car-details">
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
