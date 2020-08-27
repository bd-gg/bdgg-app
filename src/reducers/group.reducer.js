const InitialState = {
    groupList : []
}

/* reducer */
const groups = (state=[], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      state = [...state, {image:action.image, name:action.name, place:action.place, members: action.members}];
      console.log("ADD GROUP!!!!");
      return state;
    case 'REMOVE_GROUP':
      return [ 
            state.splice(action.index, 1)
      ]
    case 'GET_GROUP':
      console.log("GET GROUP!!!!");
        return state
    default:
      return state;
  }
};

export default groups;
