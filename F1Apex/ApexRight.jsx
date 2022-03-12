import './ApexRight.css';
import React from 'react';
import { useSelector } from 'react-redux';
import ImageAvatar                   from '../C0Images/ImageAvatar.jsx';
import C2Menu                        from '../C2Menu/Menu.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Right ');
  const User = useSelector( state => state.User );
  return (
    <div className="apex-right">
      { User.current && <ImageAvatar /> }
      <C2Menu/>
    </div>
  );
};
