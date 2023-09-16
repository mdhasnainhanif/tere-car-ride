import React from 'react'

const Button = (props) => {
    const {children, className = "", loading = false} = props
  return (
    <>
        <button {...props} className={`styled_button ${className}`}>{children}</button>
    </>
  )
}

export default Button