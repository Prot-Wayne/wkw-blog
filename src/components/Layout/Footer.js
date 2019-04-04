import React from 'react'

const Footer = () => {
    return (
        <footer className=" navbar-fixed-bottom border-top border-danger p-3 mt-5" >
            
            <p className="text-center "><a href="https://www.facebook.com/WorkNow-330908220860154/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" style={{ color: "#A9ACB1" }}></i></a>{' '}
                <a href="https://www.instagram.com/wkw_by_worknow/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x" style={{ color: "#A9ACB1" }}></i></a> {''}
                <a href="https://www.instagram.com/wkw_by_worknow/" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-2x" style={{ color: "#A9ACB1" }}></i></a>
                <a href="https://twitter.com/Worknow8/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" style={{ color: "#A9ACB1" }}></i></a>
                </p>
            <h4><p className="text-center text-danger">WKW</p></h4>
            <p className="text-center">{new Date().getFullYear()}</p>
        </footer>
    )
}


export default Footer