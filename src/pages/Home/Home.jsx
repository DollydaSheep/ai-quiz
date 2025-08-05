import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <div className='w-lg rounded-lg bg-teal-800 p-4 box-border flex flex-col items-center'>
        <h1 className='text-white font-bold text-2xl mb-2 place-self-start'>AI Quiz Creator</h1>
        <p className='text-gray-200/70 text-sm mb-4 place-self-start'>makes studying easier with personalized quizzes for faster, smarter reviews</p>
        <div className='w-full border-b border-gray-100/80 mb-4'></div>
        <form action="" className='place-self-start mb-4'>
          <div>
            <label htmlFor="" className='text-white'>Upload Study Material <span className='text-gray-200/70 text-xs'>(pdf,ppt,etc.)</span></label>
            <Input type="file" className='my-2' />
          </div>
        </form>
        <Button className="w-30 py-2">Submit</Button>
      </div>
    </div>
  )
}

export default Home