import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Bienvenidos a WKW</h1>
        <p className="lead">Regístrate para mayor información y participar en nuestro blog .</p>
        <hr className="my-4"></hr>
        <Link className="btn btn-primary btn-lg" to="/register" role="button"> Registrarse</Link>
      </div>
    </div>
  )
}
