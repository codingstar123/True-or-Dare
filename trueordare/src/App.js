import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [questionsSet1] = useState([
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your dream travel destination?",
    // Add more questions here
  ]);

  const [questionsSet2] = useState([
    "What is your pet's name?",
    "What is your favorite book?",
    "What is your dream job?",
    "What is your most memorable childhood memory?",
    // Add more questions here
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleClickSet1 = () => {
    const randomQuestion = getRandomQuestion(questionsSet1);
    setCurrentQuestion(randomQuestion);
  };

  const handleClickSet2 = () => {
    const randomQuestion = getRandomQuestion(questionsSet2);
    setCurrentQuestion(randomQuestion);
  };

  return (
    <div className="container">
      <h1>True or Dare</h1>
      <div className="button-container">
        <button className="button" onClick={handleClickSet1}>
          True
        </button>
        <button className="button" onClick={handleClickSet2}>
          Dare
        </button>
      </div>
      {currentQuestion && <h3 className="question">{currentQuestion}</h3>}
    </div>
  );
};

export default App;

