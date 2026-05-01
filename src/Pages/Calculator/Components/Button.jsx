import React from 'react'

const Button = ({ label, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {label}
  </button>
)

export default Button