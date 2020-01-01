export default function neighbourhoodReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_NEIGHBOURHOODS':
      return action.payload
    default:
      return state
  }
}
