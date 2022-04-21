import React from 'react';
import './Article.css';
import ArticleBar from './ArticleBar.jsx';
import _arc from '../../arc/arc.js';

export default (props) => {
  const article = props.article;
  const hash = _arc.makeAnchorHash(article.title);
  return (
    <article id={hash} className='__article'>
      <a className="article_link" href={article.link} target="_blank">
        <img className="article_link_image" src={article.image}></img>
      </a>

      <p className="article_heading">
        <a className="article_heading_link" href={article.link} target="_blank">{article.title}</a>
      </p>
      <p className="article_summary">
        {article.summary}
      </p>
      <p className="article_tag">
        {article.tag}
      </p>
      <p className="article_domain">
        {article.domain}
      </p>
      <ArticleBar article={article}/>
    </article>
  );
};