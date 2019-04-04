import { GET_VIDEOCOMMENTS, ADD_VIDEOCOMMENT, ADD_VIDEOCOMMENT_ERROR } from '../actions/types'

const initialSate = {
    videocomments: [],
    success: null,
    error: null
}

export default (state = initialSate, action) => {

    switch (action.type) {

        case GET_VIDEOCOMMENTS:
            return {
                ...state,
                videocomments: action.payload
            }

        case ADD_VIDEOCOMMENT:
            return {
                ...state,
                videocomments: [...state.videocomments, action.payload],
                success: true
            }
        case ADD_VIDEOCOMMENT_ERROR:
            return {
                ...state,
                error:true
            }
        default:
            return state
    }
}