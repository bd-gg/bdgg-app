/* reducer */
const group = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {};
    case 'REMOVE_GROUP':
      return [state.splice(action.index, 1)];
    case 'GET_GROUP':
      if (
        JSON.stringify(action.payload.groupList) ==
        JSON.stringify(state.groupList)
      ) {
        console.log('SAME!!!!!!!!');
        return state;
      }
      return { groupList: action.payload.groupList };
    default:
      return state;
  }
};

export default group;
