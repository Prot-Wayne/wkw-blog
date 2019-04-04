import React from 'react'

export default function Spinner() {
    return (

        <div className="d-flex justify-content-center" style={{marginTop:"auto"}}>

            <div className="spinner-border text-danger" role="status">
                <span><strong className="sr-only">Loading...</strong></span>
            </div>

        </div>

    )
}
