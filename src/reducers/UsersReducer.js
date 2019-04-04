import { ADD_USER, LOGIN_ERROR, LOGIN, LOG_OUT } from '../actions/types'
const initialState = {
    users: [],
    user: {},    
    error:null,
    success: null,
    loading: false,
    registered:null,
    redirect: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                users: [action.payload.user, ...state.users],
                user: action.payload.user,  
                registered:true              
            }

        case LOGIN_ERROR:
            return {
                ...state,                
                error:true,
                success: false,
                loading:false
            }
        case LOG_OUT:
            return {
                ...state,
                user: action.payload,
                success: false,
                redirect: true
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                success: true,
                error:false
            }
        default:
            return state
    }


}

