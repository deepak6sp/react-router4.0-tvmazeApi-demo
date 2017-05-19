export const searchText = (text) => {

  let result = fetch('http://api.tvmaze.com/search/shows?q='+text)
  .then(blob => blob.json())
  .then(res => {
    return res;
  });

  console.log(result);
  return {
    type: 'SUBMIT_BUTTON_CLICKED',
    payload: result
  }
};
