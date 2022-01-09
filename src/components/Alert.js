import React from 'react'

const Alert = ({alert}) =>{
    {
        console.log(alert.text)}
    return(
        // <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
        //      role="alert">
        //
        //     {alert.text}
        //     <button type="button" className="close" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible fade show`} role="alert">
            <strong>{alert.text}</strong>
            <button type="button" className="btn-close"  aria-label="Close"/>
        </div>

    )
}
export default Alert