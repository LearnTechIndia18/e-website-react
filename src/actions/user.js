import axios from "axios";
import config from "../common/authHeaders";
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER='LOGIN_USER'
export function AC_REGISTER(userData) {
    console.log('======Add User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/register", userData)
            .then(({ data }) => {
                dispatch({ type: REGISTER_USER, payload: data })
            });
    };
}
export function AC_LOGIN(userData) {
    console.log('======Login User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/login", userData)
            .then(({ data }) => {
                if(data.status==1){
                    localStorage.setItem("token",data.token)
                    window.location="/"
                    dispatch({type:LOGIN_USER, payload:data});
                }else{
                    dispatch({type:LOGIN_USER, payload:data});
                }
            });
    };
}