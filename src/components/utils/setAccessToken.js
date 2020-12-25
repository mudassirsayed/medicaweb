import { BASE_URL } from "../../resources/APIEndpoints";
import axios from "./axios";


const setAccessToken =async  () => {
    const Token = localStorage.getItem('user');
    // console.log(refreshToken)
    const data = {
        refreshToken:Token,

    }
    // console.log(refreshToken);
    await axios
      .post(BASE_URL + "/auth/access-token", data,{
        headers: {
     
          "Content-type": "application/json",
   
       },
       })
       .then((res) => {
        localStorage.setItem("access_token", res.data.accessToken);
        console.log(res.data);
      

        
     })
  .catch((err) => {
        console.log(err);
       });
     }

export default setAccessToken

