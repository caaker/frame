import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MenuBox.css';

//
import MenuBoxItem       from './MenuBoxItem.jsx';
import MenuBoxItemOdd    from './MenuBoxItemOdd.jsx';

// Icons phenomenal
import SVGUser         from '../C0Vectors/SVGUser.jsx';
import SVGHome         from '../C0Vectors/SVGHome.jsx';
import SVGAdd          from '../C0Vectors/SVGAdd.jsx';
import SVGPeople       from '../C0Vectors/SVGPeople.jsx';

export default () => {
  const dispatch = useDispatch();
  const email = useSelector((state)=>state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

  useEffect(() => {
    function bodyClicked() {
      dispatch({type: 'toggleMenuPageOff'});
    }
    document.body.addEventListener('click', bodyClicked);
    return () => {
      document.body.removeEventListener('click', bodyClicked);
    };
  });

  return (
    <span id='menu_box'>
      <MenuBoxItemOdd name='Add'>
        <SVGAdd />
      </MenuBoxItemOdd>
      <MenuBoxItem name='Articles'>
        <SVGHome  />
      </MenuBoxItem>
      <MenuBoxItem name='User'>
        <SVGUser />
      </MenuBoxItem>
      {admin && <MenuBoxItem name='People'>
        <SVGPeople className='class_new'/>
      </MenuBoxItem>}
    </span>
  );
};
