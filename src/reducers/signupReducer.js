const initialState = {
  fullname: '',
  email: '',
  password: '',
  description: ''
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return action.payload
    case 'RESET_SIGNUP_FORM':
      return initialState
    default:
      return state
  }
}
