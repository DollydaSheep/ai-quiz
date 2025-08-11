import { useState } from 'react'
import './App.css'
import { Routes ,Route } from 'react-router'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import { QuizProvider } from './context/QuizContext'
import Result from './pages/Result/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <QuizProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </QuizProvider>
  )
}

export default App
