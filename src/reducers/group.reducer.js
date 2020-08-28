
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
      if (state.length != 0) {
          console.log("WOW!!",state.length);
          return state
      }
      state = [{image:"test", name:"test1", place:"test2", members:[]}];
      return state; 
  }
};

export default groups;
