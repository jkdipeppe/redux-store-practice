export default function itemCounterReducer(state = {
  items: 0
}, action) {
  switch(action.type) {

    case 'INCREASE_COUNT':
      return Object.assign({}, state, { items: state.items + 1});

    default:
      return state;
  }
}
