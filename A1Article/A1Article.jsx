// css
import                      './A1Article.css';

// npm dependencies
import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

// local dependencies
import Article                from './Article.jsx';
import Search                 from './Search.js';

// arc dependency
import _arc                   from '../../arc/arc.js';

export default () => {

  useEffect(() => {
    _arc.scrollToHash(0);
  });

  // grab articles and search term from redux to populate articles page
  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);

  /*
  articles is an object with these properties
        domain
        image
        index
        link
        owner
        summary
        tag
        timestamp
        title
        __v
        _id
  */

  // make articles by filtering via search criteria, and then mapping to Article component
  function makeArticles() {
    if(articles) {
      if(search) {
        articles = articles.filter((val) => {
          return Search(val, search);
        });
      }
      articles = articles.map((article, index) => {
        article.index = index;
        return <Article key={index} article={article}/>;
      });
      return articles;
    }
  }

  console.logD('DEBUG: L3 : F1-Page-Article ');

  // render the page with articles
  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};