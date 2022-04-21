import React from 'react';
import { useSelector, disptach } from 'react-redux';
import './ArticleBar.css';


import C1Copy         from    '../C1Copy/C1Copy.jsx';
import C1Edit         from    '../C1Edit/C1Edit.jsx';
import C1Delete       from    '../C1Delete/C1Delete.jsx';
import ImageFavicon   from    '../C0Images/ImageFavicon.jsx';

export default (props) => {
  const article = props.article;
  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

  return (
    <div id="article_bar" >
      <ImageFavicon className='c1_favicon' domain={article.domain}/>
      <C1Copy title={article.title} />

      {admin && <div id="article_bar_admin">
        <C1Edit article={article}/>
        <C1Delete article={article}/>
      </div>}

    </div>
  );
};
