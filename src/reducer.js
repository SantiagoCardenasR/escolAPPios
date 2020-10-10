/* import { reference } from "./firebase"; */

export const initialState = {
  user: null,
  userInfo: {
    user_name: "",
    user_lastName: "",
    user_email: "",
    user_id: 0,
    user_address1: "",
    user_address2: "",
    user_phone: "",
    user_typeId: "",
    user_rol: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_USER_DATA":
      console.log(action.userData.user_name)
      return {
        ...state,
        userInfo: {
          user_name: action.userData.user_name,
          user_email: action.userData.user_email,
          user_id: action.userData.user_id,
          user_lastName: action.userData.user_lastName,
          user_city: action.userData.user_city,
          user_address1: action.userData.user_address1,
          user_address2: action.userData.user_address2,
          user_phone: action.userData.user_phone,
          user_typeId: action.userData.user_typeId,
          user_rol: action.userData.user_rol,
        }
      };
    default:
      return state;
  }
}

export default reducer;
