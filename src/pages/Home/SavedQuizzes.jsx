import React from 'react'
import Button from '../../components/Button'

const SavedQuizzes = () => {
  return (
    <div className='w-full h-screen bg-black/20 absolute z-10 flex items-center justify-center p-8 box-border'>
      <div className='w-xl p-4 bg-teal-600 rounded-lg flex flex-col items-center'>
        <h1 className='text-xl font-medium text-white self-start mb-4'>Saved Quizzes</h1>
        <div className='w-full h-72 box-border overflow-y-auto flex flex-col flex-nowrap gap-4'>
          <div className='w-full p-4 box-border bg-white/20 border border-white/25 rounded-md space-y-1'>
            <h1 className='text-lg font-medium text-white'>Quiz Name</h1>
            <p className='text-sm text-white/70'>25 questions</p>
            <p className='text-sm text-white/70'>Score: 18/25</p>
            <p className='text-sm text-white/70'>2025-08-16</p>
            <Button className={"w-full bg-green-400 hover:bg-green-400/80"}>Retry</Button>
          </div>

          <div className='w-full p-4 box-border bg-white/20 border border-white/25 rounded-md space-y-1'>
            <h1 className='text-lg font-medium text-white'>Quiz Name</h1>
            <p className='text-sm text-white/70'>25 questions</p>
            <p className='text-sm text-white/70'>Score: 18/25</p>
            <p className='text-sm text-white/70'>2025-08-16</p>
            <Button className={"w-full bg-green-400 hover:bg-green-400/80"}>Retry</Button>
          </div>

          <div className='w-full p-4 box-border bg-white/20 border border-white/25 rounded-md space-y-1'>
            <h1 className='text-lg font-medium text-white'>Quiz Name</h1>
            <p className='text-sm text-white/70'>25 questions</p>
            <p className='text-sm text-white/70'>Score: 18/25</p>
            <p className='text-sm text-white/70'>2025-08-16</p>
            <Button className={"w-full bg-green-400 hover:bg-green-400/80"}>Retry</Button>
          </div>
        </div>
        <div className='border-b border-white/25 w-full mt-4'></div>
        <Button className={"mt-4 self-end w-full"}>Back</Button>
      </div>
    </div>
  )
}

export default SavedQuizzes