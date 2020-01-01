export const fetchNeighbourhoods = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/neighbourhoods')
      .then(response => response.json())
      .then(neighbourhoods => {
        dispatch({
          type: 'FETCH_NEIGHBOURHOODS',
          payload: neighbourhoods
        })
      })
  }
}
