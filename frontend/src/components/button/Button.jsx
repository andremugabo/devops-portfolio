import React from 'react'

const Button = ({ color, text, action }) => {
  return (
    <button className={`btn ${color}`} onClick={action}>
      {text}
    </button>
  )
}

export default Button
