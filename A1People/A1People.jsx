import './A1People.css';
import React                        from         'react';
import PeopleFaces                  from         './PeopleFaces.jsx';
import PeopleConvo                  from         './PeopleConvo.jsx';
import PeopleForm                   from         './PeopleForm.jsx';
import { connect, useSelector }     from         'react-redux';

export default () => {
  console.logD('DEBUG: L3 : F1-Page-People ');
  const people = useSelector((state) => state.People.people);
  const messages = people.map((val) => val.messages);
  return (
    <div id="page-people">
      <div id="people-pad"></div>
      <PeopleFaces people={ people } />
      <PeopleConvo people={ people } />
      <PeopleForm/>
    </div>
  );
};