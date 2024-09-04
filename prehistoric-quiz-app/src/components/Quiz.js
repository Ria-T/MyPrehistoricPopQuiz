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
    // Debugging: Log current values
    console.log(`Selected Option: ${selectedOption}`);
    console.log(`Correct Answer: ${questions[currentQuestionIndex].answer}`);
    
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    
    // Debugging: Log updated score
    console.log(`Current Score: ${score + (selectedOption === questions[currentQuestionIndex].answer ? 1 : 0)}`);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(''); // Clear selected option for the next question
    } else {
      finishQuiz(score + (selectedOption === questions[currentQuestionIndex].answer ? 1 : 0)); // Pass the final score to the parent component
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
