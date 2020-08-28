/* reducer */
const group = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      state.push({
        image: action.image,
        name: action.name,
        place: action.place,
        members: action.members,
      });
      console.log('ADD GROUP!!!!');
      return state;
    case 'REMOVE_GROUP':
      return [state.splice(action.index, 1)];
    case 'GET_GROUP':
      console.log('GET GROUP!!!!');
      console.log('action: ', action);
      return { groupList: action.payload.groupList };
    default:
      return state;
  }
};

export default group;
