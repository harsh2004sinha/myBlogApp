import React from 'react'

function Button({
    child,
    type = 'button',
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-xl ${className} ${bgColor} ${textColor}`} {...props}>
        {child}
    </button>
  )
}

export default Button