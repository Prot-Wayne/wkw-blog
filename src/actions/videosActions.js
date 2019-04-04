import { GET_VIDEOCOMMENTS, ADD_VIDEOCOMMENT, ADD_VIDEOCOMMENT_ERROR } from '../actions/types'



export const get_video_comments = () => async dispatch => {

    const comments = await fetch('https://tarea1weborg.000webhostapp.com/api/videoscontroller/getvideocomments');
    const response = await comments.json();

    dispatch({
        type: GET_VIDEOCOMMENTS,
        payload: response
    })
}

export const add_video_comment = comment => async dispatch => {

    const response = await fetch("https://tarea1weborg.000webhostapp.com/api/videoscontroller/addvideocomment",{
        method:'POST',
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(comment)
    })

    const res = await response.json()

    if(res.status === 400){
        dispatch({
            type: ADD_VIDEOCOMMENT_ERROR,
            payload:res.mensaje
        })
    }else{

        dispatch({
            type: ADD_VIDEOCOMMENT,
            payload:res.video_comment
        })
    }
}