import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { get_video_comments } from '../../actions/videosActions'
import { Link } from 'react-router-dom'
import Spinner from '../Layout/Spinner'



class Videos extends Component {
  state = {
    loaded: false
  }
  async componentDidMount() {
    await this.props.get_video_comments();
    this.setState({ loaded: true })
  }
  render() {
    const { videocomments } = this.props
    const { loaded } = this.state
    if (loaded) {
      return (
        <div>
          <h4>Videos</h4>
          <div className="col-md-4">
            <iframe title="jt" width="320" height="240" src="https://www.youtube.com/embed/vu3iJ7asC-A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <Link to='videos/addcomment' className='btn btn-primary mt-5 mb-3'>Agregar Comentario</Link>
          {videocomments.map(comments => (
            
            <div  className="card mb-5">
              <div className="card-header">
                {comments.video_user_comment} {" - "}
                {comments.video_comment_date}
              </div>
              <div className="card-body">
                {comments.video_comment_body}
                
              </div>
            </div>
          ))}

        </div>
      )
    } else {
      return <Spinner />
    }
  }
}

Videos.propTypes = {
  videocomments: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  videocomments: state.videocomments.videocomments
})

export default connect(mapStateToProps, { get_video_comments })(Videos)