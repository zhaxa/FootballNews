import React from 'react';
import '../css/style.css'; // Импортируем стили

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Күте тұрыңыз...</p>
    </div>
  );
};

export default Loading;
