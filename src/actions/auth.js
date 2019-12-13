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
