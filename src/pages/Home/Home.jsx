import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { AnimatePresence, motion } from "motion/react"

const Home = () => {

  const [pdfFile, setPdfFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitComplete, setSubmitComplete] = useState(false);

  const handleFileInput = (e) => {
    setPdfFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    setSubmitComplete(true);

    try{
      const res = await fetch("http://localhost:3000/prompt?questionCount=10",{
        method: 'POST',
        encType: 'multipart/form-data',
        body: formData
      })
      const data = await res.json();
      
      console.log(data)

    } catch(err){
      console.error(err);
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 box-border'>
      {isLoading && (
        <motion.h1 initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }}>Hello</motion.h1>
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
            <form onSubmit={handleSubmit} className='place-self-start mb-4'>
              <div>
                <label htmlFor="" className='text-white'>Upload Study Material <span className='text-gray-200/70 text-xs'>(pdf,ppt,etc.)</span></label>
                <Input onChange={handleFileInput} type="file" className='my-2' />
              </div>
              <Button type="submit" value="Submit" className="w-30 py-2">Submit</Button>
            </form>
          </motion.div >)}
      </AnimatePresence>
    </div>
  )
}

export default Home