import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Закрыть меню после клика

  return (
    <header>
      <h1>Футбол командасы</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Басты бет</Link></li>
          <li><Link to="/news" onClick={closeMenu}>Жаңа ақпараттар</Link></li>
          <li><Link to="/players" onClick={closeMenu}>Ойыншылар</Link></li>
          <li><Link to="/history" onClick={closeMenu}>Тарихы</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
