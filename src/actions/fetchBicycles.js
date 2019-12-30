export const fetchBicycles = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/bicycles')
      .then(response => response.json())
      .then(bicycles => {
        dispatch({
          type: 'FETCH_BICYCLES',
          payload: bicycles
        })
      })
  }
}
