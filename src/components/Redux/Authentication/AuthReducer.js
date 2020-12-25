import {AUTH_ACTIION_TYPES} from './AuthAction'




const initialState = {
  isAuthenticated:false,
  user:{},
  error:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated:true,
        user:action.payload
      }
      case AUTH_ACTIION_TYPES.ON_LOGIN_FAILURE:
        return {
          ...state,
          error:action.payload
        }
        case AUTH_ACTIION_TYPES.ON_LOGOUT:
        return {
          ...state,
          isAuthenticated:false,
          user: {}
        }
    default:
      return state;
  }
}