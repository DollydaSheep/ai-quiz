import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { TrophySpin } from "react-loading-indicators"
import { AnimatePresence, motion } from "motion/react"
import { useQuiz } from '../../context/QuizContext'
import {  useNavigate } from 'react-router'
import SavedQuizzes from './SavedQuizzes'

const Home = () => {

  const [pdfFile, setPdfFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitComplete, setSubmitComplete] = useState(false);
  const [error, setError] = useState("");

  const allowedTypes = ["application/pdf"];

  const { setQuizData } = useQuiz();
  const navigate = useNavigate();

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    setError("");

    if(!selectedFile){
      setError("Please select a file!");
      setPdfFile(null)
    }

    if(!allowedTypes.includes(selectedFile.type)){
      setError("Invalid file type!");
      setPdfFile(null)
    }

    setPdfFile(selectedFile)
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!pdfFile){
      setError("You must choose a valid file before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    setSubmitComplete(true);

    try{
      const res = await fetch("http://localhost:3000/prompt?questionCount=5",{
        method: 'POST',
        encType: 'multipart/form-data',
        body: formData
      })
      const data = await res.json();

      setQuizData(data);
      
      console.log(data)

      navigate('/quiz')

    } catch(err){
      console.error(err);
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      <SavedQuizzes/>
      {isLoading && (
        <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }}>
          <TrophySpin color="#009689" size="large" text="LOADING" textColor="" />
        </motion.div>
      )}
      <AnimatePresence onExitComplete={()=>{setIsLoading(true)}}>
        {!submitComplete && (
          <motion.div 
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut"
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            className='w-lg rounded-lg bg-teal-800 p-4 box-border flex flex-col items-center'
          >
            <h1 className='text-white font-bold text-2xl mb-2 place-self-start'>AI Quiz Creator</h1>
            <p className='text-gray-200/70 text-sm mb-4 place-self-start'>makes studying easier with personalized quizzes for faster, smarter reviews</p>
            <div className='w-full border-b border-gray-100/80 mb-4'></div>
            <form onSubmit={handleSubmit} className='place-self-start mb-4 w-full'>
              <div>
                <label htmlFor="" className='text-white'>Upload Study Material <span className='text-gray-200/70 text-xs'>(pdf,ppt,etc.)</span></label>
                <Input onChange={handleFileInput} type="file" className={`w-full p-3 lg:p-4 my-2 hover:bg-white/20 cursor-pointer border ring-[3px] ${error ? "border-red-500 ring-red-500/50" : "border-transparent ring-transparent"}`} />
              </div>
              {error && (<p className='text-red-400 text-sm mb-2'>{error}</p>)}
              <Button type="submit" value="Submit" disabled={!!error || pdfFile === null} className={`w-30 py-2 ${(!!error || pdfFile === null) ? "pointer-events-none opacity-50" : ""}`}>Submit</Button>
            </form>
            <div className='w-full relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-b border-gray-100/80'></div>
              </div>
              <div className='relative flex justify-center'>
                <p className='text-white p-2 bg-teal-800'>or</p>
              </div>
            </div>
            <h1 className='text-white self-start mb-2'>Continue Previous Session</h1>
            <div className='flex flex-col justify-center w-full p-6 mb-2 bg-white/20 rounded-lg shadow-md'>
              <h1 className='text-center text-4xl text-teal-400'>12</h1>
              <h1 className='text-center text-lg text-white font-medium'>Saved Quizzes</h1>
            </div>
            <Button className={"self-start my-2 w-full"}>Saved Quiz</Button>
          </motion.div >)}
      </AnimatePresence>
    </div>
  )
}

export default Home