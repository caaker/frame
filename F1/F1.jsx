// npm modules
import React              from      'react';
import { useSelector }    from      'react-redux';

// repo files
import                              './F1.css';
import F1Apex             from      '../F1Apex/Apex.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Data             from      './F1Data.jsx';
import F1Socket           from      './F1Socket.jsx';
import config_private     from      '../F1-Customize/config_private.js';

// functional component
export default () => {
  console.logD('DEBUG: L1 : F1: |---------|--------|>');
  const page = useSelector( state => state.MenuPage.current );
  return (
    <div id="app_hold">
      <F1Data />
      <F1Socket />
      <F1Apex />
      <F1Page />
      <F1Modal />
      <F1Footer email={config_private.email} subject={config_private.subject} github={config_private.github} />
    </div>
  );
};
