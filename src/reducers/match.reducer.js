/* reducer */
const match = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MATCH':
      console.log('ADD MATCH!!!!');
      if (state.matchList === undefined) {
        state.matchList = [];
      }
      return { matchList: [...state.matchList, action.payload] };
    case 'REMOVE_MATCH':
      return [state.splice(action.index, 1)];
    case 'GET_MATCH_LIST':
      console.log('GET MATCH LIST!!!!', action.payload.matchList);
      return { matchList: action.payload.matchList };
    default:
      return state;
  }
};

export default match;
