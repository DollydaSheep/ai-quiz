import React from 'react'
import Button from '../../components/Button'

const Result = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <div className='w-lg flex flex-col items-center p-4 bg-teal-800 rounded-lg'>
        <h1 className='text-white text-8xl font-bold my-4'>10 / 10</h1>
        <p className='text-gray-300 mb-4 text-lg '>You did a great job!</p>
        <div className='w-full rounded-lg bg-gray-200 mb-4'>
          <div className={`p-1 w-full bg-green-500 rounded-lg place-self-start transition-all duration-500 ease-in-out`}></div>
        </div>
        <div className='w-full grid grid-cols-2 gap-2 mb-2'>
          <Button>Retry</Button>
          <Button>Save</Button>
        </div>
        <Button className="w-full">Back</Button>
      </div>
    </div>
  )
}

export default Result