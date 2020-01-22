export default function countryReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return action.payload
    default:
      return state
  }
}
