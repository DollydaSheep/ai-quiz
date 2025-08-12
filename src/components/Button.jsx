import React from 'react'
import { twMerge } from 'tailwind-merge';

const Button = ({className, children , ...props}) => {
  return (
    <button {...props} className={twMerge(
                                  `bg-cyan-500 py-2 px-3 hover:bg-cyan-500/80 rounded-lg cursor-pointer outline-none focus-visible:ring-green-800/80 focus-visible:ring-[2px]
                                  text-white transition duration-200 `,
                                  className
                                  )}
    >
      {children}
    </button>
  )
}

export default Button