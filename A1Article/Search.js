// search these 4 values
function Search(val, search_string) {

  // title
  if( val.title.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }

  // summary
  if( val.summary.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }

  // tag
  if( val.tag.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }

  // domain
  if( val.domain.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }

  // search term not found, return false to Array.filter()
  return false;
}

module.exports = Search;