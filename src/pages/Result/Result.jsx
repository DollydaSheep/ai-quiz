import React from 'react'
import Button from '../../components/Button'
import { TrophyIcon } from 'lucide-react'

const Result = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <div className='w-md flex flex-col items-center p-4 bg-teal-800 rounded-lg'>
        <TrophyIcon className='text-yellow-500 size-15 mt-4' />
        <h1 className='text-white text-8xl font-medium mb-6'>10/10</h1>
        <p className='text-gray-200 mb-6 text-lg '>You did a great job!</p>
        <div className='w-full rounded-lg bg-gray-200 mb-8'>
          <div className={`p-0.75 w-full bg-green-500 rounded-lg place-self-start transition-all duration-500 ease-in-out`}></div>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 mb-4'>
          <Button className="bg-white hover:bg-white/20 text-green-600 hover:text-white">Retry</Button>
          <Button className="bg-white hover:bg-white/20 text-green-600 hover:text-white">Save</Button>
        </div>
        <Button className="w-full">Back</Button>
      </div>
    </div>
  )
}

export default Result