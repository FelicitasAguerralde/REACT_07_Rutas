import React from 'react'
import { useParams } from 'react-router-dom'

export const Person = () => {

    const {nombre, apellido} = useParams();
    
  return (
    <div>Person

    <h1>Página de: {nombre} {apellido}</h1>
    </div>
    
  )
}
