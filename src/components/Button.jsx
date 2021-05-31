import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const Button = ({name}) => {
    return <NavHashLink to='/Landing#contact' className='button'>{name}</NavHashLink>
}

export default Button
