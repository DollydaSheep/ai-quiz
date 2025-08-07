import React from 'react'

const Input = ({ className = "", ...props }) => {
  return (
    <div>
      <input 
        {...props}
        className={`file:text-white file:text-base file:border-0 file:inline-flex file:font-medium text-white text-xs
                    box-border
                    ring ring-gray-200 rounded-lg px-3 py-1 outline-none
                    bg-teal-700
                    focus:border focus:border-white focus-visible:border-red-500 focus-visible:ring-[3px] focus-visible:ring-red-500/50 focus:outline-none
                    transition-[color,box-shadow] duration-100 
                    shadow-md ${className}`}
      />
    </div>
  )
}

export default Input