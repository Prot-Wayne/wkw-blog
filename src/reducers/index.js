import { combineReducers } from 'redux'
import CategoriesReducer from './CategoriesReducer'
import PostsReducer from './PostsReducer'
import UsersReducer from './UsersReducer'
import VideosReducer from './VideosReducer'

export default combineReducers({
    categories: CategoriesReducer,
    posts: PostsReducer,
    users: UsersReducer,
    videocomments: VideosReducer
})