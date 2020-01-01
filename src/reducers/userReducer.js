export default function userReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload
    default:
      return state
  }
};
