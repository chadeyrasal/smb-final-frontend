export function fetchCities() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/cities')
    .then(response => response.json())
    .then(cities => {
      dispatch({
        type: 'FETCH_CITIES',
        payload: cities
      })
    })
  }
}

// this is a thunk function that has dipatch as argument so that we can use it inside our action creator
// this way we dispatch only when the fetch request is complete
// dispatch() must have ak ey of type, and here since we are queriing our backend we also need payload
