import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Userinput extends Component {
    render() {
        const { label, name, value, type, onChange, errors, minlength } = this.props
        return (
            <div className="form-group">
                <label className="control-label" htmlFor={name}>{label}</label>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    minLength={minlength}
                    className={classnames('form-control', {
                        "is-invalid": errors
                    })}                    
                />
                <div className="invalid-feedback">{errors}</div>
            </div>
        )
    }    
}   

Userinput.defaultProps = {
    type: "text"
}

Userinput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    //errors: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}



export default  Userinput