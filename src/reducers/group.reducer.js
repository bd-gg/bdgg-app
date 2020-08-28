/* reducer */
const groups = (state = [], action) => {
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
      state.push({
        image: 'test',
        name: 'test1',
        place: 'test2',
        members: ['a'],
      });
      console.log(`State length:`, state, state.length);
      return state;
    default:
      return state;
  }
};

export default groups;
