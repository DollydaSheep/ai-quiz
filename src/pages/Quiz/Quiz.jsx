import React from 'react'
import Button from '../../components/Button'

const Quiz = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <div className='w-2xl p-4 rounded-lg bg-teal-800 box-border flex flex-col items-center'>
        <h1 className='text-white font-bold text-4xl place-self-start mb-4'>Question 1</h1>
        <div className='w-full rounded-lg bg-gray-200 mb-4'>
          <div className='w-1/2 p-1 bg-green-500 rounded-lg place-self-start'></div>
        </div>
        <p className='text-white text-lg mb-4'><i>Which of the following elements has the highest melting point?</i></p>
        <div className='w-full flex space-x-2 mb-2'>
          <Button className="w-full py-3 text-xl bg-green-400 hover:bg-green-400/80">Iron</Button>
          <Button className="w-full py-3 text-xl bg-sky-400 hover:bg-sky-400/80">Tungsten</Button>
        </div>
        <div className='w-full flex space-x-2'>
          <Button className="w-full py-3 text-xl bg-yellow-400 hover:bg-yellow-400/80">Gold</Button>
          <Button className="w-full py-3 text-xl bg-red-400 hover:bg-red-400/80">Titanium</Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz