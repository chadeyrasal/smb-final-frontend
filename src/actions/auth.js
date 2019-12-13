export const updateLoginForm = (formData) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    payload: formData
  }
}

export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}

export const login = credentials => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      credentials: 'include',
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
          dispatch(setCurrentUser(user))
        }
      })
      .catch(console.log)
  }
}

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

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE',
    })
  }
}

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}
