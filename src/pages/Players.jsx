import React from 'react';
import PlayerCard from '../components/PlayerCard';

const Players = () => {
  const players = [
    { id: 1, name: 'Табалды Бейбарыс', position: 'Нападающий', image: '/images/beybakzh.jpg' },
    { id: 2, name: 'Айту Амир', position: 'Вратарь', image: '/images/amirkzh.jpg' },
  ];

  return (
    <div>
      <h2 className='Players-title'>Біздің ойыншыларымыз</h2>
      <div className="players-container">
        {players.map(player => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
