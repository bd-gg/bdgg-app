// TODO
// EX. let user = localStorage.getItem('user');
const INITIAL_STATE = {
  isLogin: false,
  user: null
};

const authentication = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLogin: true,
        user: action.user
      };
    case 'LOGIN_FAILURE':
      return {};
    case 'LOGOUT':
      return {};
    default:
      return state
  };
};

export default authentication;