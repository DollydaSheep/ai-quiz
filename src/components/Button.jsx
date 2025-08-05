import React from 'react'

const Button = ({className, children , ...props}) => {
  return (
    <button {...props} className={`bg-cyan-500 py-1 px-3 hover:bg-cyan-500/80 rounded-lg cursor-pointer outline-none focus-visible:ring-green-800/80 focus-visible:ring-[2px]
                                    text-white ${className}`}>
      {children}
    </button>
  )
}

export default Button