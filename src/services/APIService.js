// eslint-disable-next-line no-unused-vars
import React from 'react'
import axios from '../components/utils/axios'

class APIService {
    constructor(props) {
        this.error = false;
        this.results = {};
        this.status = "";
    }

    getHeader(){
        var headers = {
            Accept : "application/json",
            'Content-type': 'application/json',
            Authorization : 'Bearer ' + localStorage.get('user')
        }

        return headers;
    }

    async get(url){
        await axios.get( url, 
            // data , 
            {
                headers: this.getHeader()
            })
            .then((res) =>{
                this.results = res;
                this.status = res.status;
            })
            .catch((err) => {
                console.log(err);
            });

            if(this.status !== 200){
                this.error = true;
            }

            return{
                error : this.error,
                results: this.results,
                status: this.status,
            }


    }


}
 
export default APIService;