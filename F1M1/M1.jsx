import React from 'react';
import './M1.css';
import M1Form from './M1Form.jsx';

export default (props) => {
  console.logD('DEBUG: L3 : F1-Modal-Article ');

  return (
    <div className='modal-article'>
      <p className='modal-article-title'>Articles</p>
      <M1Form/>
    </div>
  );
};
