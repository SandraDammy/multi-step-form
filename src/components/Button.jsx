import React from 'react'
import "./styles/styles.css";

const Button = ({className, title, btnEventHandler}) => {
  return (
    <div onClick={btnEventHandler} className={className}>
        <span>{title}</span>
    </div>
  )
}

export default Button