export default function bicycleReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BICYCLES':
      return action.payload
    default:
      return state
  }
}
