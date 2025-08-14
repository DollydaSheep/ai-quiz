import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useQuiz } from '../../context/QuizContext'
import { TrophySpin } from 'react-loading-indicators'
import { AnimatePresence, motion } from "motion/react"
import { Check, X} from "lucide-react";
import {  useNavigate } from 'react-router'

const Quiz = () => {

  const { quizData, correctCount, setCorrectCount, totalQuestion, setTotalQuestion } = useQuiz();
  const navigate = useNavigate();

  const [question , setQuestion] = useState([]);
  const [choices , setChoices] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [showWrong, setShowWrong] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (e, currentQuestion, choiceIndex) => {
    if(answer[currentQuestion] === choiceIndex){
      setShowCorrect(true);
      setCorrectCount(prev => prev + 1);
      const timer = setTimeout(() => {setShowCorrect(false);incrementCurrentQuestion()}, 2000);
    }else{
      setShowWrong(true);
      const timer = setTimeout(() => {setShowWrong(false);incrementCurrentQuestion()}, 2000);
    }
  }

  const incrementCurrentQuestion = () => {
    if(currentQuestion + 1 === totalQuestion){
      navigate('/result');
    }else {
      setCurrentQuestion(prev => prev + 1);
    }
  }

  useEffect(()=> {
    setQuestion(quizData.questions);
    setChoices(quizData.answerOpt)
    setAnswer(quizData.correctAnswer);
    setTotalQuestion(quizData.questions.length);
  },[quizData])

  console.log(quizData);
  console.log(question);

  if(question.length === 0){
    return(
      <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <div className='w-2xl p-4 rounded-lg bg-teal-800 box-border flex flex-col items-center justify-center'>
        <TrophySpin color="#009689" size="large" text="LOADING" textColor="" />
      </div>
    </div>
    )
  }

  console.log("Question",totalQuestion)
  console.log("correct",correctCount)

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <AnimatePresence>
        {showCorrect && (
          <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} className='absolute w-full h-screen bg-black/20 flex items-center justify-center'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className='flex flex-col justify-center items-center p-12 rounded-lg bg-teal-600'>
              <Check className='text-green-400' size={96} />
              <h1 className='text-green-400 text-4xl font-bold'>Check</h1>
            </motion.div>
          </motion.div>
        )}
        {showWrong && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute w-full h-screen bg-black/20 flex items-center justify-center'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className='flex flex-col justify-center items-center p-12 rounded-lg bg-teal-600'>
              <X className='text-red-400' size={96} />
              <h1 className='text-red-400 text-4xl font-bold'>Wrong</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='w-2xl p-4 rounded-lg bg-teal-800 box-border flex flex-col items-center'>
        <h1 className='text-white font-bold text-4xl place-self-start mb-4'>Question {currentQuestion + 1}</h1>
        <div className='w-full rounded-lg bg-gray-200 mb-4'>
          <div className={`p-1 ${correctCount === 0 ? "bg-white/0" : "bg-green-500"} rounded-lg place-self-start transition-all duration-500 ease-in-out`} style={{ width: `${(correctCount / totalQuestion) * 100}%`}}></div>
        </div>
        <p className='text-white text-lg mb-4'><i>{question[currentQuestion]}</i></p>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
          <Button onClick={(e)=>{handleAnswer(e, currentQuestion, 0)}} className="w-full py-3 text-xl bg-green-400 hover:bg-green-400/80 capitalize">{choices[currentQuestion][0]}</Button>
          <Button onClick={(e)=>{handleAnswer(e, currentQuestion, 1)}} className="w-full py-3 text-xl bg-sky-400 hover:bg-sky-400/80 capitalize">{choices[currentQuestion][1]}</Button>
          <Button onClick={(e)=>{handleAnswer(e, currentQuestion, 2)}} className="w-full py-3 text-xl bg-yellow-400 hover:bg-yellow-400/80 capitalize">{choices[currentQuestion][2]}</Button>
          <Button onClick={(e)=>{handleAnswer(e, currentQuestion, 3)}} className="w-full py-3 text-xl bg-red-400 hover:bg-red-400/80 capitalize">{choices[currentQuestion][3]}</Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz