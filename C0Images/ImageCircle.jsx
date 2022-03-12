import './ImageCircle.css';

import React from 'react';
import { useSelector } from 'react-redux';

export default (props) => {
  return (
    <div id="zimage-wrapper">
      <img id="zimage" src={props.src}/>
    </div>
  );
};
