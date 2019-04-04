import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Post extends Component {
    render() {
        const { post } = this.props
         
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h2 className="text-danger">{post.post_title}</h2><h5>{post.post_date}</h5>
                    <p>Autor: {post.post_user}</p>
                </div>
                <div className="card-body">
                    {post.post_body}
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post