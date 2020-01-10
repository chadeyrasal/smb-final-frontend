export const updateNewTripForm = formData => {
  return {
    type: 'UPDATE_NEW_TRIP_FORM',
    payload: formData
  }
}

export const createTrip = trip => {
  return {
    type: 'CREATE_TRIP',
    payload: trip
  }
}

export const resetNewTripForm = () => {
  return {
    type: 'RESET_NEW_TRIP_FORM'
  }
}

export const addTrip = formData => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/trips', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(trip => {
        if (trip.error) {
          alert(trip.error)
        } else {
          dispatch(createTrip(trip))
          dispatch(resetNewTripForm())
        }
      })
      .catch(console.log)
  }
}
