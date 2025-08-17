import React from 'react'
import Button from '../../components/Button'
import { AnimatePresence, motion } from "motion/react"
import { PencilIcon } from 'lucide-react'

const SavedQuizzes = ({ setSavedQuizModal }) => {

  const handleBack = () => {
    setSavedQuizModal(false);
  }

  return (
    <motion.div exit={{opacity: 0}} className='w-full h-screen bg-black/30 absolute z-10 flex items-center justify-center p-8 box-border'>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0 }} className='w-xl p-4 bg-teal-800 rounded-lg flex flex-col items-center'>
          <h1 className='text-xl font-medium text-white self-start mb-4'>Saved Quizzes</h1>
          <div className='w-full h-72 box-border overflow-y-auto flex flex-col flex-nowrap gap-4'>
            <div className='w-full p-4 box-border bg-white/20 border border-white/25 rounded-md space-y-1 shadow-lg'>
              <div className='flex justify-between'>
                <h1 className='text-lg font-medium text-white'>Quiz Name</h1>
                <PencilIcon className='text-white cursor-pointer hover:scale-125 transition duration-200' size={18}/>
              </div>
              <p className='text-sm text-white/70'>Science Quiz</p>
              <p className='text-sm text-white/70'>25 questions</p>
              <p className='text-sm text-white/70'>2025-08-16</p>
              <Button className={"w-full bg-green-400 hover:bg-green-400/80"}>Retry</Button>
            </div>

          </div>
          <div className='border-b border-white/25 w-full mt-4'></div>
          <Button className={"mt-4 self-end w-full"} onClick={handleBack}>Back</Button>
        </motion.div>
    </motion.div>
  )
}

export default SavedQuizzes