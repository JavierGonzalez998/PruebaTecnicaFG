import { SET_LANG } from "../types";

export default (state, action) => {
    const {payload,type} = action;
    switch(type){
        case SET_LANG:
            return {
                ...state,
                lang: payload
            }
    }
}