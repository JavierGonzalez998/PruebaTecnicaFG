import { LOGIN_USER, REGISTER_USER } from "../types";
import { LOG_OUT } from "../types"; 
export default (state, action) => {
    const {payload,type} = action;
    switch(type){
        case LOGIN_USER:
            return {
                ...state,
                user: payload
            }
        case REGISTER_USER:
            return{
                ...state,
                user: payload
            }
        case LOG_OUT:
            return{
                ...state,
                user: payload
            }
    }
}