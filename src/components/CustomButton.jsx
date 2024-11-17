import React from 'react'

const CustomButton = ({text, rightIcon, leftIcon, otherStyles, size, btnType}) => {
    const buttonSize = size === 'small' ? 'btn-sm' : '';
    const button_type = btnType === "one" ? "btnTypeOne" : "btnTypeTwo";
  return (
    <button className={`btn ${buttonSize} ${otherStyles} ${button_type}`}>
        <span className='relative z-10'>{leftIcon}</span>
        <span className='relative z-10'>{text}</span>
        <span className='relative z-10'>{rightIcon}</span>
    </button>
  )
}

export default CustomButton