import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Postinput extends Component {
    render() {
        const { label, name, value, onChange, error, type } = this.props
        return (
            <div className="form-group">
            <label htmlFor={name}>{label}</label>
                <input                    
                    name={name}
                    value={value}
                    type={type}
                    onChange={onChange}
                    className={classnames('form-control', {
                        'is-invalid': error
                    })}
                />
                <div className="invalid-feedback">{error}</div>
            </div>
        )
    }
}

Postinput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Postinput.defaultProps = {
    type: 'text'
}

export default Postinput