const initialSate = {
  email: '',
  password: ''
}

export default function loginReducer(state = initialSate, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return action.payload
    case 'RESET_LOGIN_FORM':
      return initialSate
    default:
      return state
  }
}
