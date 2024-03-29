import React, {useContext} from 'react'
import AlertContext from "../context/alert/alertContext";

const Alert = () =>{

    const {alert,hide} = useContext(AlertContext)
    if (!alert) {return null}

    return(

        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible fade show`} role="alert">
            <strong>{alert.text}</strong>

            <button type="button" className="btn-close"  aria-label="Close" onClick={hide}/>
        </div>

    )
}
export default Alert