import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../../actions/usersActions'
import PropTypes from 'prop-types'
import authUser from '../helper/Auth'
import {withRouter } from 'react-router-dom'



class Header extends Component {

    state = {
        redirect: false
    }

    logOut = async e => {
        e.preventDefault()
        await this.props.userLogout()
        this.props.history.push("/")
    }
    render() {
        //const { success } = this.props
        
        return (
            <nav className="navbar navbar-dark navbar-expand-md bg-danger py-0 mb-5">
                <div className="container">
                    <Link to="/" className="navbar-brand">WKW</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mainmenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><i className="fa fa-home"></i>Inicio</Link>

                            </li>
                            {authUser() ? (<li className="nav-item">
                                <Link to="/blog" className="nav-link"><i className="fa fa-comments"></i>Blog</Link>
                            </li>) : null}

                            {authUser() ? (<li className="nav-item">
                                <Link to="/videos" className="nav-link"><i className="fas fa-video"></i>Videos</Link>
                            </li>) : null}

                            {authUser() ? (<li className="nav-item">
                                <Link to="#" className="nav-link" onClick={this.logOut}><i className="fa fa-user"></i>Terminar sesión</Link>
                            </li>) : (<li className="nav-item">
                                <Link to="/login" className="nav-link"><i className="fa fa-user"></i>Iniciar sesión</Link>
                            </li>)}

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    userLogout: PropTypes.func.isRequired
}

const mapPropsToState = state => ({
    success: state.users.success,
    redirect: state.users.redirect
})

export default withRouter(connect(mapPropsToState, { userLogout })(Header))