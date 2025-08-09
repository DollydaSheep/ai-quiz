import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useQuiz } from '../../context/QuizContext'
import { TrophySpin } from 'react-loading-indicators'

const Quiz = () => {

  const { quizData, correctCount, setCorrectCount, totalQuestion, setTotalQuestion } = useQuiz();

  const [question , setQuestion] = useState([]);
  const [choices , setChoices] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

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
      <div className='w-2xl p-4 rounded-lg bg-teal-800 box-border flex flex-col items-center'>
        <h1 className='text-white font-bold text-4xl place-self-start mb-4'>Question 1</h1>
        <div className='w-full rounded-lg bg-gray-200 mb-4'>
          <div className={`p-1 ${correctCount === 0 ? "bg-white/0" : "bg-green-500"} rounded-lg place-self-start`} style={{ width: `${(correctCount / totalQuestion) * 100}%`}}></div>
        </div>
        <p className='text-white text-lg mb-4'><i>{question[currentQuestion]}</i></p>
        <div className='w-full flex space-x-2 mb-2'>
          <Button className="w-full py-3 text-xl bg-green-400 hover:bg-green-400/80 capitalize">{choices[currentQuestion][0]}</Button>
          <Button className="w-full py-3 text-xl bg-sky-400 hover:bg-sky-400/80 capitalize">{choices[currentQuestion][1]}</Button>
        </div>
        <div className='w-full flex space-x-2'>
          <Button className="w-full py-3 text-xl bg-yellow-400 hover:bg-yellow-400/80 capitalize">{choices[currentQuestion][2]}</Button>
          <Button className="w-full py-3 text-xl bg-red-400 hover:bg-red-400/80 capitalize">{choices[currentQuestion][3]}</Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz