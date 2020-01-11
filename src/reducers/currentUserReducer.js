export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.payload
    case 'CLEAR_CURRENT_USER':
      return null
    case 'CREATE_TRIP':
      return null
    default:
      return state
  }
}
