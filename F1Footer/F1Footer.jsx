import './F1Footer.css';

import React from 'react';
import { useSelector } from 'react-redux';

export default (props) => {

  const mailer = `mailto:${ props.email }?subject=${ props.subject }`;
  const page = useSelector((state)=>state.MenuPage.current);
  const style = (page === 'User') ? 'footer_show ' : 'footer_hide';

  console.logD('DEBUG: L2 : F1-Footer ');
  return (
    <div id="footer_hold" className={style}>
      <div id="footer_inner" className='footer_style_90'>
        <a className="footer_item" href={mailer}>contact</a>
        <a className="footer_item" target="_blank" href={props.github}>github</a>
      </div>
    </div>
  );
};
