import                                   './Menu.css';
import React                             from 'react';
import { useDispatch, useSelector }      from 'react-redux';
import SVGMenu                           from '../C0Vectors/SVGMenu.jsx';
import MenuBox                           from './MenuBox.jsx';

export default () => {
  const dispatch = useDispatch();
  const menu = useSelector((state)=>state.MenuPage.on);
  function clicked() {
    dispatch({type: 'toggleMenuPage'});
  }
  return (
    <div id="menu">
      <SVGMenu onClick={clicked} id='menu_top'/>
      {menu && <MenuBox/>}
    </div>
  );
};
