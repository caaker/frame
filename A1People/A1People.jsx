import './A1People.css';
import React                        from         'react';
import PeopleFaces                  from         './PeopleFaces.jsx';
import PeopleConvo                  from         './PeopleConvo.jsx';
import PeopleForm                   from         './PeopleForm.jsx';
import { connect, useSelector }     from         'react-redux';

export default () => {
  const people = useSelector((state) => state.People.people);
  console.logD('DEBUG: L3 : F1-Page-People ');
  return (
    <div id="page-people">
      <div id="people-pad"></div>
      <PeopleFaces people={ people } />
      <PeopleConvo people={ people } />
      <PeopleForm/>
    </div>
  );
};