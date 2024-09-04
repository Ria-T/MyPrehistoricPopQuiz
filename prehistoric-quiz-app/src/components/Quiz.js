import React, { useState } from 'react';

const questions = [
  {
    question: 'Which of the following dinosaurs was the largest?',
    options: ['Tyrannosaurus Rex.', 'Brachiosaurus.', 'Stegosaurus.'],
    answer: 'Brachiosaurus.',
  },
  {
    question: 'What era is known as "The Age of Dinosaurs"?',
    options: ['Mesozoic Era.', 'Cenozoic Era.', 'Paleozoic Era.'],
    answer: 'Mesozoic Era.',
  },
  {
    question: 'Which dinosaur had a large frill on its neck?',
    options: ['Triceratops.', 'Velociraptor.', 'Ankylosaurus.'],
    answer: 'Triceratops.',
  },
  {
    question: 'What was the largest known prehistoric shark?',
    options: ['Dunkleosteus.', 'Liopleurodon.', 'Megalodon.'],
    answer: 'Megalodon.',
  },
  {
    question: 'Which prehistoric bird had a wingspan of up to 40 feet and is considered one of the largest flying creatures ever?',
    options: ['Argentavis.', 'Quetzalcoatlus.', 'Pteranodon.'],
    answer: 'Quetzalcoatlus.',
  },
  {
    question: 'What process turns organic material into stone, preserving it as a fossil?',
    options: ['Calcification.', 'Weathering.', 'Petrification.'],
    answer: 'Petrification.',
  },
  {
    question: 'Which was the largest carnivorous dinosaur?',
    options: ['Spinosaurus.', 'Tyrannosaurus Rex.', 'Giganotosaurus.'],
    answer: 'Spinosaurus.',
  },
  {
    question: 'Which extinction event is known as "The Great Dying", where up to 96% of marine species went extinct?',
    options: ['The Ordovician-Silurian Extinction Event.', 'The Permian-Triassic Extinction Event.', 'The Cretaceous-Paleogene Extinction Event.'],
    answer: 'The Permian-Triassic Extinction Event.',
  },
  {
    question: 'What event is believed to have caused the extinction of the dinosaurs?',
    options: ['The impact of a large asteroid or comet.', 'A global ice age.', 'A gamma-ray burst.'],
    answer: 'The impact of a large asteroid or comet.',
  },
  {
    question: 'What is the name of the large prehistoric saber-toothed cat?',
    options: ['Machairodus.', 'Thylacosmilus.', 'Smilodon.'],
    answer: 'Smilodon.',
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
