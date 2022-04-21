import './PeopleConvo.css';
import React           from         'react';
import { useDispatch, useSelector } from 'react-redux';

export default (props) => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.People.people);
  const messages = [];

  const conversation = messages.map((val, index)=>{
    const left = true;
    if(left) {
      return <p key={index} className='sentenceL'>{val}</p>;
    }
    return <p key={index} className='sentenceR'>{val}</p>;
  });

  return (
    <div id="people-convo">

      {conversation}

    </div>
  );
};
