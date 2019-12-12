import {setCurrentUser} from './setCurrentUser'

// asynchronous action creator
// will return a function
export const login = credentials => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser)
        }
      })
      .catch(console.log)
  }
}
