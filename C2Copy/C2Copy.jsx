import React from 'react';
import './C2Copy.css';
import arc from '../../arc/arc.js';

import SVGCopy from '../C0Vectors/SVGCopy.jsx';

// props.title is required to create the anchor hash
export default (props) => {

  // create the hash, and the link to the hash from the title
  const hash = arc.makeAnchorHash(props.title);
  const hash_link = window.location.origin + '#' + hash;

  function onClick(event) {
    arc.copyToClipboard(hash_link);
    alert('Copied the text: ' + hash_link);
  }

  return (
    <SVGCopy id={hash} className='c1_copy' onClick={onClick} />
  );
};
