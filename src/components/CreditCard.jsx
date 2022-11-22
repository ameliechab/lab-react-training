import React from 'react';
import VisaImage from '../assets/images/visa.png';
//import MasterCardImage from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  if (type === 'Visa') {
    type = VisaImage;
  } /*else if (type === 'Master Card') {
    type = MasterCardImage;
  }*/

  return (
    <div class="card-container">
      <div
        className="CreditCard"
        style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
      >
        <img class="logo-image" src={type} alt="logo image" />
        <div>
          <h2>XXXX XXXX XXXX {number.substr(12, 4)}</h2>
        </div>
        <div class="expire-owner">
          <div class="expire-bank">
            <h4>
              Expires {expirationMonth < 10 ? "0" : ""}{expirationMonth}/{expirationYear}
            </h4>
            <h4 class="bank">{bank}</h4>
          </div>
          <h4>{owner}</h4>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
