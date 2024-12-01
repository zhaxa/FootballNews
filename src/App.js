import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';  // Уберите импорт Router
import Header from './components/Header';
import Homepage from './pages/Homepage';
import News from './pages/News';
import Players from './pages/Players';
import History from './pages/History';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && window.location.pathname === "/" ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/players" element={<Players />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
