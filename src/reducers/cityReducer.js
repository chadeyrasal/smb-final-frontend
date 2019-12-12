// this reducer will be responsible for updating the parts of our store that have to do with cities

// we pass on a default value of empty object into the state just for the first one. Then it will be the current state
export default function cityReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CITIES':
      return action.payload
    default:
      return state

  }
};
