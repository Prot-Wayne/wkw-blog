import {GET_POSTS, ADD_POST}from './types'

export const getPosts = (id) => async dispatch =>{

    const res = await fetch(`https://tarea1weborg.000webhostapp.com/api/postscontroller/getpostsbycategory?category_id=${id}`)
    
    const posts = await res.json()

    dispatch({
        type: GET_POSTS,
        payload: posts
    })
}

export const addPost = newpost => async dispatch=>{

    const res = await fetch(`https://tarea1weborg.000webhostapp.com/api/postscontroller/addpost`,{
        
        method:'POST',
        headers:{
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(newpost)
    })

    const post = await res.json()

    dispatch({
        type: ADD_POST,
        payload: post.post
    })
}