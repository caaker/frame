import                                      './ApexRight.css';
import React                          from  'react';
import { useSelector }                from  'react-redux';
import CompAvatar                     from  '../CompAvatar/CompAvatar.jsx';
import CompMenu                       from  '../CompMenu/Menu.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Right ');
  const User = useSelector( state => state.User );
  return (
    <div className="apex-right">
      { User.current && <CompAvatar /> }
      <CompMenu/>
    </div>
  );
};
