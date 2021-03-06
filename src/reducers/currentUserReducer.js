export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.payload
    case 'CLEAR_CURRENT_USER':
      return null
    case 'CREATE_TRIP':
      return {...state, reservations: [...state.reservations, action.payload]}
    default:
      return state
  }
}
