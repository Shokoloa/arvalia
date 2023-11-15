import React, { useState } from 'react';
import webUpdate from '../../assets/news/web_update.jpg';

export const Articles = ({ data }) => {
  const [expandedArticles, setExpandedArticles] = useState([]);

  const toggleArticleExpansion = (index) => {
    if (expandedArticles.includes(index))
      setExpandedArticles(expandedArticles.filter((item) => item !== index));
    else
      setExpandedArticles([...expandedArticles, index]);
  };

  return (
    <div id="news-panel">
      {data.map((article, index) => {
        const isExpanded = expandedArticles.includes(index);
        let lowDesc = article.desc.substring(0, 30) + "...";
        let img;

        if (article.class === "webUpdate")
          img = webUpdate;

        return (
          <article className={`news-card ${isExpanded ? 'news-card-active' : ''}`} key={index}>
            <img src={img} draggable="false" alt="Actualité" />
            <div className="date">
              <p>{article.date}</p>
            </div>
            <figcaption>
              <h6>{article.name}</h6>
              <p className="lowDesc" style={{ display: isExpanded ? 'none' : 'flex' }}>{lowDesc}</p>
              <p className="globalDesc" style={{ display: isExpanded ? 'flex' : 'none' }}>{article.desc}</p>
              <button className="read-more" onClick={() => toggleArticleExpansion(index)}>
                {isExpanded ? 'Voir moins' : 'Voir plus'}
              </button>
            </figcaption>
          </article>
        );
      })}
    </div>
  );
}

