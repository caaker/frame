import React from 'react';
import './C1Copy.css';
import arc from '../../arc/arc.js';

import SVGCopy from '../C0Vectors/SVGCopy.jsx';

export default (props) => {
  const hash = arc.makeAnchorHash(props.title);
  const hash_link = window.location.origin + '#' + hash;
  const class_name = props.className || 'c1_copy';

  function onClick(event) {
    arc.copyToClipboard(hash_link);
    alert('Copied the text: ' + hash_link);
  }
  return (
    <SVGCopy id={hash} className={class_name} onClick={onClick} />
  );
};
