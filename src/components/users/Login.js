import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Userinput from '../Layout/Userinput'
import { userLogin } from '../../actions/usersActions'
import { Redirect } from 'react-router-dom'
import authUser from '../helper/Auth'


class Login extends Component {
  state = {
    user_email: '',
    user_password: '',
    errors: {},
    isLoading: false,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = async e => {
    e.preventDefault()
    this.setState({ isLoading: true })

    const { user_email, user_password } = this.state


    if (user_email === '') {
      this.setState({ errors: { user_email: "Correo es requerido" }, isLoading: false })

      return
    }

    if (user_password === '') {
      this.setState({ errors: { user_password: "Correo es requerido" }, isLoading: false })
      return
    }

    const userLogin = {
      user_email,
      user_password
    }
    
    await this.props.userLogin(userLogin);
    this.setState({isLoading:false})   
    
    
  }

  
  
  render() {
    const { user_email, user_password, errors, isLoading } = this.state
    const { error, success } = this.props
    if (authUser()) {
      return <Redirect to="/blog" />
    }
    if (success) {
      return <Redirect to="/blog" />
    }

    return (
      <div className="card mx-auto w-50 mb-5">
        <div className="card-header"><h4>Iniciar Sesión</h4></div>
        <div className="card-body">
          {error ? (<div className="alert alert-danger" data-auto-dismiss>{"Error en las credenciales"}</div>) : null}
          <form action="" onSubmit={this.onSubmit}>
            <Userinput
              label='Correo'
              name='user_email'
              value={user_email}
              onChange={this.onChange}
              errors={errors.user_email}
            />
            <Userinput
              label='Contraseña'
              name='user_password'
              value={user_password}
              type='password'
              onChange={this.onChange}
              errors={errors.user_password}
            />
            <input type="submit" value={isLoading ? ("Iniciando...") : ("Iniciar Sesión")} className="btn btn-danger btn-block" disabled={isLoading} />
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
  error: state.users.error,
  user: state.users.user,
  success: state.users.success,

})
export default connect(mapStateToProps, { userLogin })(Login)