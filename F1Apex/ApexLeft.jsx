import './ApexLeft.css';
import React from 'react';
import ImageLogo from '../C0Images/ImageLogo.jsx';
import CompSearch from '../CompSearch/CompSearch.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Left ');
  return (
    <div className="apex-left">
      <ImageLogo path=''/>
      <CompSearch />
    </div>
  );
};
