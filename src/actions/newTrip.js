export const addTrip = (formData) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trips', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(trip => dispatch({
        type: 'ADD_TRIP',
        payload: trip
      }))
  }
}
