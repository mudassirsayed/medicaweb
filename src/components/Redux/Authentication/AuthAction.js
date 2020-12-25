import { BASE_URL } from "../../../resources/APIEndpoints";
import axios from "../../utils/axios";
import setAccessToken from '../../utils/setAccessToken'


export const AUTH_ACTIION_TYPES = {
  
    ON_LOGIN_SUCCESS: "AUTH/ON_LOGIN_SUCCESS",
    ON_LOGIN_FAILURE: "AUTH/ON_LOGIN_FAILURE",
  
  };
  
  export const onLoginSuccess = (user) => {
    return {
      type: AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS,
      payload: user,
    };
  };
  export const onLoginFailure = (data) => {
    return {
      type: AUTH_ACTIION_TYPES.ON_LOGIN_FAILURE,
      payload: data,
      
    };
  };
  
  
  
//   export const onLogin = (userData) => {
//       return (dispatch) => {
//       console.log(userData)
      
//       dispatch(onLoginSuccess(userData));
   
//       }
//   }

export const onLogin = (data, history) => {
    return (dispatch) => {
        axios
      .post(BASE_URL + "/auth/refresh-token", data, {
        headers: {
          "Content-type": "application/json",
       },
       })
      .then((res) => {
        

        localStorage.setItem("user", res.data.refreshToken);
       setAccessToken();
        console.log(res);
        dispatch(onLoginSuccess(res.data.refreshToken))
        // setAuthToken(res.data.refreshToken);
        history.push("/homepage");
     })
  .catch((err) => {
        console.log(err);
       });
  };


    }

  
   
  