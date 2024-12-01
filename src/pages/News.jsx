import React, { useState, useEffect } from 'react';

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Замените URL на ваш Mocky URL
    fetch('https://1b895225a95d7446.mokky.dev/news')
      .then(response => response.json())
      .then(data => setNewsList(data))
      .catch(error => console.error('Ошибка при получении новостей:', error));
  }, []);

  return (
    <div>
      <h2 className='News-title'>Новости</h2>
      <div className="news-container">
        {newsList.length > 0 ? (
          newsList.map(news => (
            <div key={news.id} className="card">
              <h3>{news.title}</h3>
              <p>{news.date}</p>
            </div>
          ))
        ) : (
          <p>Загрузка новостей...</p>
        )}
      </div>
    </div>
  );
};

export default News;
