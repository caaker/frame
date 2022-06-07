import './M1Form.css';
import React                          from 'react';
import { useSelector, useDispatch }   from 'react-redux';
import M1FormInputs                   from './M1FormInputs.jsx';
import M1FormButton                   from './M1FormButton.jsx';
import Submit                         from './Z1Submit.js';


export default () => {
  const dispatch = useDispatch();
  const data_form = useSelector((state) => state.ArticleForm) || {};
  const config = useSelector((state) => state.Modal.config);

  // implement ?
  function onTest() {
    dispatch({type: 'testArticleForm'});
  }

  function onSubmit() {
    event.preventDefault();
    if(data_form.valid) {
      dispatch({type: 'clearArticleForm'});
      dispatch({type: 'toggleModalOff'});

      // edit the article using put
      if(config) {
        Submit.put(makeObject(), dispatch);

      // add the article using post
      } else {
        Submit.post(makeObject(), dispatch);
      }
      alert('Form submitted.  Thank you.');

    } else {
      alert('Form has errors.  Please correct.');
    }
  }

  // data_form should hold index
  function makeObject() {
    const res = {};
    res.link = data_form.link.value;
    res.image = data_form.image.value;
    res.title = data_form.title.value;
    res.summary = data_form.summary.value;
    res.tag = data_form.tag.value;
    res.domain = data_form.domain.value;

    // for Edit / PUT only, a new article has no _id from MongoDB
    if(data_form._id) {
      res._id = data_form._id.value;
    }
    if(data_form.index) {
      res.index = data_form.index.value;
    }
    return res;
  }

  return (
    <form autoComplete="off" className='modal-form' onSubmit = {onSubmit}>
      <M1FormInputs />
      <M1FormButton config={config}/>
    </form>
  );

};
