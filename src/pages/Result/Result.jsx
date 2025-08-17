import React from 'react'
import Button from '../../components/Button'
import { TrophyIcon } from 'lucide-react'
import { AnimatePresence, delay, motion } from "motion/react"
import { useQuiz } from '../../context/QuizContext';
import { useNavigate } from 'react-router';

const MotionTrophy = motion(TrophyIcon);

const Result = () => {

  const { correctCount, setCorrectCount , totalQuestion, setTotalQuestion } = useQuiz();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setCorrectCount(0);
    setTotalQuestion(0);
  }
  
  const handleRetry = () => {
    navigate("/quiz")
    setCorrectCount(0);
  }

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}} className='w-md flex flex-col items-center p-4 bg-teal-800 rounded-lg'>
        <MotionTrophy initial={{ opacity: 0, y: 10  }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className='text-yellow-500 size-15 mt-4' />
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className='text-white text-8xl font-medium mb-6'>{correctCount}/{totalQuestion}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }} className='text-gray-200 mb-6 text-lg '>You did a great job!</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }} className='w-full rounded-lg bg-gray-200 mb-8'>
          <motion.div initial={{ width: 0 }} animate={{ width: `${(correctCount/totalQuestion)*100 + "%"}` }} transition={{ delay: 1.1, duration: 0.7 }} className={`p-0.75 w-1/2 ${correctCount === 0 ? "bg-transparent" : "bg-green-500"} rounded-lg place-self-start transition-all duration-500 ease-in-out`}></motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }} className='w-full'>
          <div className='w-full grid grid-cols-2 gap-4 mb-4'>
            <Button className="bg-white hover:bg-white/20 text-green-600 hover:text-white" onClick={handleRetry}>Retry</Button>
            <Button className="bg-white hover:bg-white/20 text-green-600 hover:text-white">Save</Button>
          </div>
          <Button className="w-full" onClick={handleBack}>Back</Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Result