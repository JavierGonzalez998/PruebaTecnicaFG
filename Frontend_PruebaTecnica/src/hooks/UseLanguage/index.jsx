import React, {useEffect, useContext, useState} from 'react'
import LangContext from "../../context/Lang/LangContext"
import Es from "./lang/es"
import En from "./lang/en"
const index = () => {
    const {lang} = useContext(LangContext);
    const [language, setLanguage] = useState(Es)
    useEffect(() => {
        lang == "es" ? setLanguage(Es) : setLanguage(En)
    },[lang])

  return {
    language
  }
}

export default index