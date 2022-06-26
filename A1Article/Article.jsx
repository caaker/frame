import                          './Article.css';
import React from               'react';
import ArticleBar from          './ArticleBar.jsx';
import _arc from                '../../arc/arc.js';
import testImage from           './testImage.js';


export default (props) => {
  const image_not_found = '/images/medical-symbol.jpeg';

  // articles object is passed in from parent component
  const article = props.article;

  // create hash from the article title
  const hash = _arc.makeAnchorHash(article.title);

  testImage(article.image, 'article_link_image');

  // return the article component
  return (
    <article id={hash} className='__article'>
      <a className="article_link" href={article.link} target="_blank">

        <img
          className="article_link_image"
          src={article.image}
          onError={(error) => {
            error.currentTarget.src = image_not_found;
          }}
        />

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

      {/* article has component ArticleBar which contains the Update and Delete operations */}

      <ArticleBar article={article}/>
    </article>
  );
};

