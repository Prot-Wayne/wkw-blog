import React, { Component } from 'react'
import Postinput from '../Layout/Postinput'
import { connect } from 'react-redux'
import { addPost } from '../../actions/postsActions'
import PropTypes from 'prop-types'
import { ToastsStore } from 'react-toasts';
import { Redirect } from 'react-router-dom'


class Addpost extends Component {
    state = {
        post_title: '',
        post_body: '',
        errors: {},
        isLoading: false,
        redirect: false
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = async e => {

        this.setState({ isLoading: true })
        e.preventDefault();

        const { post_title, post_body } = this.state
        const { id } = this.props.match.params;

        this.setState({ isLoading: true })

        if (post_title === '') {
            this.setState({ errors: { post_title: 'Título es requerido' }, isLoading:false })
            return
        }
        if (post_body === '') {
            this.setState({ errors: { post_body: 'Cuerpo es requerido' }, isLoading:false })
            return
        }

        const user = JSON.parse(sessionStorage.getItem("user"));  
        
        const newPost = {
            post_title,
            post_body,
            user_id: user.user_id,
            category_id: id
        }
        
       await this.props.addPost(newPost)

        this.setState({
            post_title: '',
            post_body: '',
            errors: {},
            isLoading: false,
            redirect:true
        })

        //this.props.history.pushState(`/blog/category/${id}`);        
        
        ToastsStore.success("Post Agregado")

    }
    render() {
        const { post_title, post_body, errors, isLoading, redirect } = this.state
        const {id} = this.props.match.params
        if(redirect)        {
            return <Redirect push to={`/blog/category/${id}`} />
        }
        return (
            <div className="card w-50 mx-auto">
                <div className="card-header"><h4>Agregar Post</h4></div>
                <div className="card-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <Postinput
                            label='Título'
                            name='post_title'
                            value={post_title}
                            onChange={this.onChange}
                            error={errors.post_title}
                        />
                        <Postinput
                            label='Cuerpo'
                            name='post_body'
                            value={post_body}
                            onChange={this.onChange}
                            error={errors.post_body}
                        />
                        <input type="submit" value={isLoading ? "Agregando post...":"Agregar Post"} className="btn btn-block btn-danger mb-3" disabled={isLoading}/>
                        

                    </form>
                </div>
            </div>

        )
    }
}

Addpost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(Addpost)