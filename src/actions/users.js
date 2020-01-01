export const fetchUsers = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
      .then(response => response.json())
      .then(users => {
        dispatch({
          type: 'FETCH_USERS',
          payload: users
        })
      })
  }
}
