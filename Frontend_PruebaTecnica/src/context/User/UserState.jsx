import React, { useReducer } from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import axios from "axios"
import conn from "../../connections/conn"

const UserState = ({ children }) => {
    const initialState = {
        user: {
            name: "",
            mail: "",
            admin: 0
        }
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const LoginUser = async (mail, password) => {
        const url = conn();
        const Response = (await axios.post(`${url}/user/login`, { mail, passwrd: password })).data
        if (Response.length !== 0) {
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    name: Response[0].name,
                    mail: Response[0].mail,
                    admin: Response[0].admin
                }
            })
            return true
        }

        return false

    }

    const RegisterUser = async (name, mail, pass) => {
        const url = conn();
        const Response = await axios.post(`${url}/user/register`, {name, mail, passwrd: pass })
        if (Response.status == 201 && typeof Response.data === "object") {
            dispatch({
                type: "REGISTER_USER",
                payload: {
                    name: Response.data.name,
                    mail: Response.data.mail,
                    admin: Response.data.admin
                }
                
            })
            return true
        }

        return false
    }

    const Logout = () => {
        dispatch({
            type: "LOG_OUT",
            payload: initialState.user
        })
    }

    return (
        <UserContext.Provider value={{ user: state.user, LoginUser, Logout, RegisterUser }}>
            {children}
        </UserContext.Provider>)
}

export default UserState;