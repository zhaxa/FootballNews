import React from 'react';
import '../css/style.css';

const PlayerCard = ({ name, position, image }) => (
  <div className="card">
    <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
    <h3>{name}</h3>
    <p>{position}</p>
  </div>
);

export default PlayerCard;
