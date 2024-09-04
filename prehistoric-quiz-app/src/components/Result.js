import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your score is: {score}</p>
    </div>
  );
};

export default Result;
