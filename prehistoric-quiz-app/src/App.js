import React, { useState } from 'react';
import './styles.css';  
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setScore(0); // Reset the score
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizStarted(false);
    setQuizFinished(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    startQuiz(); // Optionally call startQuiz to reset state
  };

  return (
    <div className="App">
      <h1>My Prehistoric Pop Quiz</h1>
      {!quizStarted && !quizFinished && (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
      {quizStarted && !quizFinished && (
        <Quiz finishQuiz={finishQuiz} />
      )}
      {quizFinished && (
        <Result score={score} restartQuiz={restartQuiz} />
      )}
    </div>
  );
};

export default App;
