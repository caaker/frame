import './ApexLeft.css';
import React from 'react';
import ImageLogo from '../C0Images/ImageLogo.jsx';
import C2Search from '../C2Search/C2Search.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Left ');
  return (
    <div className="apex-left">
      <ImageLogo path=''/>
      <C2Search />
    </div>
  );
};
