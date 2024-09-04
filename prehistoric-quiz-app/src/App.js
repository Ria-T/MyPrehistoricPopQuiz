import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div className="App">
      <h1>Prehistoric Quiz App</h1>
      {!quizStarted && !quizFinished && (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
      {quizStarted && !quizFinished && (
        <Quiz finishQuiz={finishQuiz} />
      )}
      {quizFinished && (
        <Result />
      )}
    </div>
  );
};

export default App;
