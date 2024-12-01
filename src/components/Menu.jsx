import React, { useState } from 'react';
import '../css/style.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Басты бет</li>
          <li>Жаңа ақпараттар</li>
          <li>Ойыншылар</li>
          <li>Тарихы</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
