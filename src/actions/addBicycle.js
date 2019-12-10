export const addBicycle = (formData) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/bicycles', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData) // this way formData is treatedas a string, when initially it is an object
    })
      .then(response => response.json())
      .then(bicycle => dispatch({
        type: 'ADD_BICYCLE',
        payload: bicycle
      }))
  }
}
