import React, { useReducer } from "react"
import BankReducer from "./BankReducer"
import BankContext from "./BankContext"
import axios, { Axios } from "axios"
import conn from "../../connections/conn"

const BankState = ({ children }) => {
    const initialState = {
        banks: {
            data: [],
            page: 1,
            size: 1,
            total: 0
        },
    }

    const [state, dispatch] = useReducer(BankReducer, initialState)

    const GetBanks = async (page = 1, size = 10) => {
        const url = conn();
        const Response = (await axios.get(`${url}/bank/all?page=${page}&size=${size}`)).data
        dispatch({
            type: "GET_BANKS",
            payload: Response
        })
    }
    const GetBankByUID = async (uid) => {
        const url = conn();
        const Response = await axios.get(`${url}/bank/${uid}`)
        if (Response.status === 200) {
            dispatch({
                type: "GET_BANK_BY_UID",
                payload: Response.data
            })
        }

    }

    const AddBank = async (bank) => {
        const url = conn();
        const Response = (await axios.post(`${url}/bank/add`, bank)).data
        return Response !== null
    }

    const EditBank = async (bank) => {
        const url = conn();
        const Response = await axios.put(`${url}/bank/edit`, bank)
        return Response.status === 200
    }
    const DeleteBank = async (uid) => {
        const url = conn();
        const Response = await axios.delete(`${url}/bank/${uid}`)
        return Response.status === 200
    }
    return (
        <BankContext.Provider value={{ banks: state.banks, GetBanks, GetBankByUID, AddBank, EditBank, DeleteBank }}>
            {children}
        </BankContext.Provider>)
}

export default BankState;