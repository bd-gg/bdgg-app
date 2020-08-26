const InitialState = {
    groupList : []
}

/* reducer */
const groups = (state=InitialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      state.groupList = [...state.groupList, {image:action.image, name:action.name, place:action.place, members: action.members}];
      console.log("ADD GROUP!!!!");
      return state;
    case 'REMOVE_GROUP':
      return [ 
            state.groupList.splice(action.index, 1)
      ]
    case 'GET_GROUP':
      console.log("GET GROUP!!!!");
        return state.groupList
    default:
      return state;
  }
};

export default groups;
