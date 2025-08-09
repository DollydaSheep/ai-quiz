import { createContext, useContext, useState } from "react";


const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, correctCount, setCorrectCount, totalQuestion, setTotalQuestion}}>
      {children}
    </QuizContext.Provider>
  )
}