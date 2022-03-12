import React from 'react';
import './Article.css';
import ArticleBar from './ArticleBar.jsx';
import _arc from '../../arc/arc.js';

export default (props) => {
  const hash = _arc.makeAnchorHash(props.data.title);
  return (
    <article id={hash} className='medd_article'>
      <a className="medd_link" href={props.data.link} target="_blank">
        <img className="medd_link_image" src={props.data.image}></img>
      </a>

      <p className="medd_heading">
        <a className="medd_heading_link" href={props.data.link} target="_blank">{props.data.title}</a>
      </p>
      <p className="medd_summary">
        {props.data.summary}
      </p>
      <p className="medd_tag">
        {props.data.tag}
      </p>
      <p className="medd_domain">
        {props.data.domain}
      </p>
      <ArticleBar data={props.data}/>
    </article>
  );
};