import { GET_BANKS, GET_BANK_BY_UID,EDIT_BANKNAME, DELETE_BANK, ADD_BANK } from "../types";

export default (state, action) => {
    const {payload,type} = action;
    switch(type){
        case GET_BANKS:
            return {
                ...state,
                banks: payload
            }
        case GET_BANK_BY_UID:
            return{
                ...state,
                banks: payload
            }
        case EDIT_BANKNAME:
        return{
            ...state,
            banks: payload
        }
        case DELETE_BANK:
        return{
            ...state,
            banks: payload
        }
        case ADD_BANK:
            return{
                ...state,
                banks:payload
            }
    }
}