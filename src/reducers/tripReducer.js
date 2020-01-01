export default function tripReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TRIP':
      return [...state, action.payload]
    default:
      return state
  }
}
