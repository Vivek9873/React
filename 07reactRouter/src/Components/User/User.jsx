import React from 'react'
import { useParams } from 'react-router-dom'

// React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {userid}</div>
  )
}

export default User