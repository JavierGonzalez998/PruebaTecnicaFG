import React, {useReducer} from "react"
import LangReducer from "./LangReducer"
import LangContext from "./LangContext"

const LangState = ({children}) => {
    const initialState = {
        lang: "es"
    }

    const [state, dispatch] = useReducer(LangReducer, initialState)

    const setLang = (lang) => {
        dispatch({
            type: "SET_LANG",
            payload: lang
        })
    }

    return (
    <LangContext.Provider value={{lang: state.lang, setLang}}>
        {children}
    </LangContext.Provider>)
}

export default LangState;