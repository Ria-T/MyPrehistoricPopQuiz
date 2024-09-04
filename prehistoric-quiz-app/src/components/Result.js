import React from 'react';

const Result = ({ score, restartQuiz }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your score is: {score}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Result;
