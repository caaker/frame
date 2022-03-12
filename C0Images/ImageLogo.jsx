import React, { useState } from 'react';
import './ImageLogo.css';

export default function (props) {
  const logo = props.path || '/images/favicon-optimized.svg';
  const [on, toggle] = useState(true);
  function onClick() {
    if(on) {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .1)');
    } else {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    }
    toggle(!on);
  }
  return <img className='left-logo' id = {on ? 'rotate_01' : 'rotate_90'} onClick={onClick} src={logo}/>;
};