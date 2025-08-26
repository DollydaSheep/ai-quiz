import { createContext, useContext, useEffect, useState } from "react";


const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if(quizData) {
      localStorage.setItem("recentQuiz", JSON.stringify(quizData));
    }
  },[quizData]);

  useEffect(() => {
    const saved = localStorage.getItem("recentQuiz");

    if(saved) {
      setQuizData(JSON.parse(saved));
    }
  },[]);

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, correctCount, setCorrectCount, totalQuestion, setTotalQuestion, currentQuestion, setCurrentQuestion}}>
      {children}
    </QuizContext.Provider>
  )
}