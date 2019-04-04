import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import authUser from '../helper/Auth'

const  Protectedroute= ({component: Component, ...rest})  =>{
  return (
    <Route {...rest} render={
        (props) =>{
            if(authUser()){

                return <Component {...props}/>
            }else{
                return <Redirect to="/login"/>
            }
        }
    }/>
  )
}


export default Protectedroute