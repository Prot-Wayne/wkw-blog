import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'
import { getPosts } from '../../actions/postsActions'
import { Link } from 'react-router-dom'
import Spinner from '../Layout/Spinner'

class Posts extends Component {
    state = {
        loaded: false
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        await this.props.getPosts(id)
        this.setState({ loaded: true })
        
    }
    render() {
        const { posts } = this.props
        const { loaded } = this.state
        const { id } = this.props.match.params
        if (loaded) {

            return (

                <React.Fragment>
                    <div>
                        <Link to={`/blog/category/${id}/addpost`} className="btn btn-primary mb-3">Agregar Post</Link>
                    </div>
                    {
                        posts.map(post => (
                            <Post
                                key={post.post_id}
                                post={post}
                            />
                        ))
                    }
                </React.Fragment>
            )
        } else {
            return <Spinner />
        }


    }
}

const mapStateToProps = state => ({

    posts: state.posts.posts
})

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { getPosts })(Posts)