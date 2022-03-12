// search the title, summary, tag, and domain for the search criteria
function Search(val, search_string) {
  if( val.title.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( val.summary.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( val.tag.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  if( val.domain.toLowerCase().search(search_string.toLowerCase()) !== -1 ) {
    return true;
  }
  return false;
}

module.exports = Search;
