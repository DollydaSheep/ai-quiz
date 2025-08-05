import React from 'react'

const Input = ({ className = "", ...props }) => {
  return (
    <div>
      <input 
        {...props}
        className={`file:text-black file:border-0 file:inline-flex file:font-medium
                    ring ring-gray-400 rounded-lg px-3 py-1 outline-none
                    focus:border  focus-visible:border-red-500 focus-visible:ring-[3px] focus-visible:ring-red-500/50 focus:outline-none
                    transition-[color,box-shadow] duration-100 
                    shadow-md ${className}`}
      />
    </div>
  )
}

export default Input