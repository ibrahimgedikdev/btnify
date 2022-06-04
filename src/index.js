import React from 'react'
import PropTypes from 'prop-types'; 


export const Button = ({ props, children, variant, size, rounded, outline }) => {
  const BUTTON_VARIANTS = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    success: 'btn--success',
    warning: 'btn--warning',
    danger: 'btn--danger'
  }

  const BUTTON_SIZES = {
    sm: 'btn--sm',
    md: 'btn--md',
    lg: 'btn--lg',
    xl: 'btn--xl'
  }

  const colorClassName = BUTTON_VARIANTS[variant || 'primary']
  const sizeClassName = BUTTON_SIZES[size || 'sm']

  return (
    <button
      className={`${colorClassName} ${sizeClassName} ${outline ? 'btn--outline' : ''} ${rounded ? 'btn--rounded' : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant : PropTypes.string,
  size : PropTypes.string,
  rounded : PropTypes.bool,
  outline : PropTypes.bool,
}
