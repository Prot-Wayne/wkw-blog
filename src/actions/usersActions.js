import { ADD_USER, LOGIN_ERROR, LOGIN, LOG_OUT } from './types'

export const addUser = user => async dispatch => {

    const res = await fetch(`https://tarea1weborg.000webhostapp.com/api/userscontroller/adduser`, {
        method: 'POST',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(user)
    })

    const resUser = await res.json()

    if (resUser.status === 400) {

        dispatch({
            type: LOGIN_ERROR,
            payload: resUser.error
        })
    } else {

        dispatch({
            type: ADD_USER,
            payload: resUser
        })
    }

}

export const userLogin = user => async dispatch => {

    const res = await fetch(`https://tarea1weborg.000webhostapp.com/api/Userscontroller/userLogin`, {

        method: 'POST',
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify(user)
    })

    const login = await res.json()


    if (login.status === 400) {
        dispatch({
            type: LOGIN_ERROR,
            payload: login.error
        })
    } else {
        sessionStorage.setItem("user", JSON.stringify(login.user))
        dispatch({
            type: LOGIN,
            payload: login
        })
    }


}

export const userLogout = () => dispatch => {
    sessionStorage.removeItem('user');
    dispatch({
        type: LOG_OUT,
        payload: {}
    })
}