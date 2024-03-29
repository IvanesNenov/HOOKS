import React, {useReducer} from 'react'
import AlertContext from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {


    const [state, dispatch] = useReducer(alertReducer,null)
    const hide = () => dispatch({type: HIDE_ALERT})
    const show = (text, type = 'danger') => dispatch({
        type: SHOW_ALERT,
        payload: {text, type}
    })


    return (
        <AlertContext.Provider value={{show, hide, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}
