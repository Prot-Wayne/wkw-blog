import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_category } from '../../actions/categoriesActions'
import PropTypes from 'prop-types'
import classnames from 'classnames'




class Addcategory extends Component {
    state = {
        category_name: '',
        errors: {},
        isLoading: false
    }

    onSubmit = async e => {
        e.preventDefault()

        this.setState({ isLoading: true })

        const { category_name } = this.state

        if (category_name === '') {
            this.setState({ errors: { category_name: "Nombre es requerido" }, isLoading: false })
            return
        }

        const newCategory = {
            category_name
        }

        await this.props.add_category(newCategory)
        this.setState({ isLoading: false })
        this.props.history.push("/blog")


    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { category_name, errors, isLoading } = this.state
        const { error } = this.props

        return (
            <div className="card w-50 mx-auto">
                <div className="card-header"><h4>Nuevo Tema</h4></div>
                {error ? (<div className="alert alert-danger" >{error}</div>) : null}
                <div className="card-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="category_name">Nombre</label>
                            <input
                                type="text"
                                name="category_name"
                                value={category_name}
                                onChange={this.onChange}
                                className={classnames('form-control', {
                                    "is-invalid": errors.category_name
                                })}
                            />
                            <div className="invalid-feeback">{errors.category_name}</div>
                        </div>
                        <button type="submit" className="btn btn-block btn-danger" disabled={isLoading}>
                            {isLoading ? "Agregando..." : "Agregar"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

Addcategory.propTypes = {
    add_category: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    error: state.categories.error,
    success: state.categories.success
})

export default connect(mapStateToProps, { add_category })(Addcategory)