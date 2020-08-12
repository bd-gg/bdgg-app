// TODO
// EX. let user = localStorage.getItem('user');
const INITIAL_STATE = {
  isLoading: true,
  isLogin: false,
  user: null,
};

/* reducer */
const authentication = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TOKEN_SUCCESS':
      return {
        isLoading: false,
        isLogin: true,
      };
    case 'GET_TOKEN_FAILURE':
      return {
        isLoading: false,
        isLogin: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        isLoading: false,
        isLogin: true,
        user: action.user,
      };
    case 'LOGIN_FAILURE':
      return {};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default authentication;
