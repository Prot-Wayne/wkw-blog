import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/usersActions'
import Userinput from '../Layout/Userinput'
import PropTypes from 'prop-types'
import Spinner from '../Layout/Spinner'
//import {withRouter } from 'react-router-dom'


class Adduser extends Component {
   
    state = {
        user_name: '',
        user_lastname: '',
        user_email: '',
        user_password: '',
        errors: {},
        isLoading: false,       
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = async e => {

        e.preventDefault()

        const { user_name, user_lastname, user_email, user_password } = this.state

        this.setState({ isLoading: true })

        if (user_name === '') {
            this.setState({ errors: { user_name: "Nombre es requerido" }, isLoading:false })
            return
        }

        if (user_lastname === '') {
            this.setState({ errors: { user_lastname: "Apellido es requerido" }, isLoading:false })
            return
        }

        if (user_email === '') {
            this.setState({ errors: { user_email: "Email es requerido" }, isLoading:false })
            return
        }

        if (user_password === '') {
            this.setState({ errors: { user_password: "Password es requerido" },isLoading:false })
            return
        }

        const newUser = {
            user_name,
            user_lastname,
            user_email,
            user_password,
        }

        await this.props.addUser(newUser)

        this.setState({
            user_name: '',
            user_lastname: '',
            user_email: '',
            user_password: '',
            errors: {},
            isLoading: false
        })

        //this.props.history.push("/login")
    }

    render() {
        const { user_name, user_lastname, user_email, user_password, errors, isLoading } = this.state
        const { error, registered } = this.props

        return (
            <div className="card w-50 mx-auto">
                <div className="card-header"><h4>Registrarse</h4></div>
                <div className="card-body">
                    {error ? (<div className="alert alert-danger" data-auto-dismiss>{error}</div>) : null}
                    {registered ? (<div className="alert alert-success" data-auto-dismiss>Registro Exitoso, ya puede iniciar sesión</div>) : null}
                    <form action="" onSubmit={this.onSubmit}>
                        <Userinput
                            label='Nombre'
                            name='user_name'
                            value={user_name}
                            onChange={this.onChange}
                            errors={errors.user_name}
                        />
                        <Userinput
                            label='Apellido'
                            name='user_lastname'
                            value={user_lastname}
                            onChange={this.onChange}
                            errors={errors.user_lastname}
                        />
                        <Userinput
                            label='Email'
                            name='user_email'
                            type='email'
                            value={user_email}
                            onChange={this.onChange}
                            errors={errors.user_email}
                        />
                        <Userinput
                            label='Password'
                            name='user_password'
                            type='password'
                            minlength="6"
                            value={user_password}
                            onChange={this.onChange}
                            errors={errors.user_password}
                        />
                        {isLoading ? <Spinner /> : <input type="submit" value="Registrarse" className="btn btn-danger btn-block" />}

                    </form>
                </div>
            </div>
        )
    }
}

Adduser.propTypes = {
    addUser: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    error: state.users.error,
    user: state.users.user,
    registered: state.users.registered

})

export default connect(mapStateToProps, { addUser })(Adduser)