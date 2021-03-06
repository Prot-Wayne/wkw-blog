import { GET_POSTS, ADD_POST } from '../actions/types'
const initialState = {
    posts: [],
    post:{}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                post: action.payload
            }
        default:
            return state;
    }
}