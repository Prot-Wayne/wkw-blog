import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_categories } from '../../actions/categoriesActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Spinner from '../Layout/Spinner'


class Categories extends Component {
    state = {
        loaded: false
    }
    async componentDidMount() {
        await this.props.get_categories()
        this.setState({ loaded: true })
    }
    comp
    render() {
        const { categories } = this.props
        const { loaded } = this.state
        const { user_email } = JSON.parse(sessionStorage.getItem("user"));     
       
        if (loaded) {
            return (
                <div>
                    <h2 className="text-center  text-danger mb-5">Temas</h2>
                    {user_email==="guerrero8315@hotmail.com" ? (<Link to="/blog/addcategory" className="btn btn-primary mb-3">Nuevo Tema</Link>): null}
                    

                    <React.Fragment>
                        {
                            categories.map(category => (
                                <ul className="list-group-flush">
                                    <li key={category.category_id} className="list-group-item">
                                        <h4 ><Link to={`/blog/category/${category.category_id}`} className="display-lead text-secondary">{category.category_name} <i className="fa fa-angle-double-right"></i></Link></h4>
                                    </li>
                                </ul>

                            ))
                        }
                    </React.Fragment>
                </div>
            )
        } else {
            return <div className="mt-5"><Spinner /></div>
        }
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,

}

const mapStateToProps = state => ({
    categories: state.categories.categories,

})

export default connect(mapStateToProps, { get_categories })(Categories)