import                                    './C1Delete.css';
import React                        from  'react';
import { useDispatch }              from  'react-redux';
import SVGDelete                    from  '../C0Vectors/SVGDelete.jsx';

export default (props) => {
  const dispatch = useDispatch();
  function verifyDelete() {
    const article = props.article;

    // id holds the mongoDB id of the article to delete
    const id = encodeURIComponent(article._id);
    let yes = confirm('Are you sure you want to delete the article titled - ' + '\'' + article.title + '\'');
    if(!yes) {
      return;
    }

    // delete the article on the client and the server
    deleteClientArticle(article.index);
    deleteServerArticle(id);
  }

  // redux will handle the delete on the client
  function deleteClientArticle(index) {
    dispatch({type: 'deleteArticle', index: index});
  }

  // hit the delete path on the server
  function deleteServerArticle(id) {
    const options = {
      headers: {'Content-Type': 'application/json'},
      method: 'DELETE'
    };
    fetch('/articles/delete/' + id, options )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log('DEBUG: /articles/delete ', response);
      })
      .catch((error) => {
        console.error('DEBUG: fetch/DELETE error', error);
      });
  }

  // render the delete component or SVG element
  return <SVGDelete className='medd_delete' onClick={verifyDelete} />;
};
