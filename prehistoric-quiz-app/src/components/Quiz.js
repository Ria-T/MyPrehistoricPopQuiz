import React, { useState } from 'react';

const questions = [
  {
    question: 'Which dinosaur was the largest?',
    options: ['Tyrannosaurus Rex', 'Brachiosaurus', 'Stegosaurus'],
    answer: 'Brachiosaurus',
  },
  {
    question: 'What era did dinosaurs live in?',
    options: ['Mesozoic Era', 'Cenozoic Era', 'Paleozoic Era'],
    answer: 'Mesozoic Era',
  },
  {
    question: 'Which dinosaur had a large frill on its neck?',
    options: ['Triceratops', 'Velociraptor', 'Ankylosaurus'],
    answer: 'Triceratops',
  },
];

const Quiz = ({ finishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      console.log('Quiz finished'); // Debugging  
      finishQuiz(); // Call finishQuiz function when the quiz is completed
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="quiz-option"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            aria-labelledby={`label-option-${index}`}
          />
          <label id={`label-option-${index}`} htmlFor={`option-${index}`}>
            {option}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Quiz;
