const initialState = {
  registerInfo:[],
  loginInfo: [],
}
function USER_Reducer(state = initialState, action) {
  console.log("-=-=-=Reducer=-=-=", action)
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        registerInfo: action.payload
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loginInfo: action.payload
      }
      break;
    default:
      return state;
      break;
  }
}
export default USER_Reducer;