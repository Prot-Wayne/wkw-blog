import { GET_CATEGORIES, ADD_CATEGORY, CATEGORY_ERROR } from '../actions/types'
const initialState = {
    categories: [],
    error: null,
    success: null,    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
                success: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                success: true
            }

        default:
            return state
    }
}