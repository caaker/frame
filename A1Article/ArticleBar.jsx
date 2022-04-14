import React from 'react';
import { useSelector, disptach } from 'react-redux';
import './ArticleBar.css';

import C3BarAdmin     from    '../C3BarAdmin/C3BarAdmin.jsx';
import C2Copy         from    '../C2Copy/C2Copy.jsx';
import C1Favicon      from    '../C0Images/ImageFavicon.jsx';

export default (props) => {
  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

  return (
    <div id="article_bar" className="test_foo_1">
      <C1Favicon className='c1_favicon' domain={props.data.domain}/>
      <C2Copy title={props.data.title} />
      {admin && <C3BarAdmin data={props.data}/>}
    </div>
  );

};
