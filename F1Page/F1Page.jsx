import './F1Page.css';
import React from 'react';
import { useSelector } from 'react-redux';

// app pages
import AppArticle from             '../A1Article/A1Article.jsx';
import A1People  from              '../A1People/A1People.jsx';


// framework pages
import F1User from                 '../F1PageUser/User.jsx';

export default () => {
  const page = useSelector( (state) => state.MenuPage.current );
  const user = useSelector( (state) => state.User.current );
  console.logD('DEBUG: L2 : F1-Page');
  return (
    <div id='page_hold'>
      <div className='page_container'>

        {(page === 'User')                   &&   <F1User/>}
        {(page === 'Articles')               &&   <AppArticle/>}
        {(page === 'People')                 &&   <A1People/>}

      </div>
    </div>
  );
};
