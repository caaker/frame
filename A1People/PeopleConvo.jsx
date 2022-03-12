import './PeopleConvo.css';
import React           from         'react';
import { useDispatch } from 'react-redux';

export default (props) => {
  const dispatch = useDispatch();

  let messages = props.people[0].messages;

  let conversation;

  conversation = messages.map((val, index)=>{
    val = val.message;
    const prefix = val.slice(0,1);
    val = val.slice(2);
    if(prefix === 'L') {
      return <p key={index} className='sentenceL'>{val}</p>;
    }
    if(prefix === 'R') {
      return <p key={index} className='sentenceR'>{val}</p>;
    }
  });
  return (
    <div id="people-convo">
      {conversation}
    </div>
  );
};
