import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Nirth: {birth}</p>
      <img src={picture} alt="Picture" />
    </div>
  );
}

export default IdCard;

/*<IdCard
  lastName="Delores "
  firstName="Obrien"
  gender="female"
  height={172}
  birth={new Date('1988-05-11')}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>;*/
