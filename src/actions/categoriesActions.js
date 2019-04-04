import { GET_CATEGORIES, ADD_CATEGORY, CATEGORY_ERROR } from './types'

export const get_categories = () => async dispatch => {


    const res = await fetch('https://tarea1weborg.000webhostapp.com/api/categoriescontroller/getcategories');
    const categories = await res.json();

    dispatch({
        type: GET_CATEGORIES,
        payload: categories
    })
}

export const add_category = category => async dispatch => {

    const res = await fetch(`https://tarea1weborg.000webhostapp.com/api/categoriescontroller/addcategory`, {
        method: 'POST',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(category)
    })

    const info = await res.json()

    if (info.status === 400) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: info.error
        })
    } else {
        dispatch({
            type: ADD_CATEGORY,
            payload: info.category
        })

    }

}