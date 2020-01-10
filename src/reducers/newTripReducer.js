const initialState = {
  startDate: new Date(),
  endDate: new Date(),
  bicycle: null,
  renter: null
}

export default function newTripReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_NEW_TRIP_FORM':
      return action.payload
    case 'RESET_NEW_TRIP_FORM':
      return initialState
    case 'CREATE_TRIP':
      return [...state, action.payload]
    default:
      return state
  }
}
