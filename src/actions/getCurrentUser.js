import {setCurrentUser} from './setCurrentUser';

export const getCurrentUser = () => {
  return dispatch => {
    return (
      fetch('http://localhost:3000/api/v1/get_current_user', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
          }
        })
        .catch(console.log)
    )
  }
}
