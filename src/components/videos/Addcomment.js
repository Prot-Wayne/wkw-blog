import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { add_video_comment } from '../../actions/videosActions'
import Postinput from '../Layout/Postinput';


class Addcomment extends Component {
    state = {
        isLoading: false,
        body: '',
        errors: {}
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = async e => {

        e.preventDefault()

        const { body } = this.state
        this.setState({ isLoading: true })

        if (body === '') {
            this.setState({ errors: { body: "Campo requerido" }, isLoading: false });
            return
        }
        const { user_id } = JSON.parse(sessionStorage.getItem("user"));

        const newComment = {
            body,
            user_id

        }

        await this.props.add_video_comment(newComment)

        this.setState({ isLoading: false })

        this.props.history.push("/videos");
    }
    render() {
        const { errors, body, isLoading } = this.state
        const { error } = this.props
        return (
            <div className="card w-50 mx-auto ">
                <div className="card-header"><h4>Agregar Comentario</h4></div>
                <div className="card-body">
                    {error ? (<div className="alert alert-danger">{error}</div>) : null}
                    <form action="" onClick={this.onSubmit}>
                        <Postinput
                            label='Comentario'
                            name="body"
                            value={body}
                            onChange={this.onChange}
                            error={errors.body}
                        />
                        <input type="submit" value={isLoading ? "Agregando..." : "Agregar Comentario"} className="btn btn-danger btn-block" disabled={isLoading} />
                    </form>
                </div>
            </div>
        )
    }
}
Addcomment.propTypes = {
    add_video_comment: PropTypes.func.isRequired
}

export default connect(null, { add_video_comment })(Addcomment)