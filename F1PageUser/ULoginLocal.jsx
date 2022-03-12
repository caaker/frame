import './ULoginLocal.css';
import React from 'React';
import BoxUserForm from './BoxUserForm.jsx';

export default () => {  
  return ( 
    <div className ="box-inner">
      <form>
        <input 
          type="text" 
          className="user-input"
          placeholder="email"
          autoComplete="on" >
        </input>
        <input 
          type="password" 
          className="user-input"
          placeholder="password"
          autoComplete="on">
        </input>
        <button className="user-button ">
          Log in
        </button>
      </form> 
    </div>
  );
};
