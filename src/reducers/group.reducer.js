/* reducer */
const group = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      console.log('ADD GROUP!!!!');
      if (state.groupList === undefined) {
        state.groupList = [];
      }
      return { groupList: [...state.groupList, action.payload]};
    case 'REMOVE_GROUP':
      return [state.splice(action.index, 1)];
    case 'GET_GROUP':
      console.log('GET GROUP!!!!');
      console.log('state.groupList: ', state.groupList);
      //return { groupList: action.payload.groupList };
      // [TODO] This should be action.payload.groupList???
      return state;
    default:
      return state;
  }
};

export default group;
