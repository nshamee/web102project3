import React, { useState } from 'react';

const Card = ({ card, showQuestion, toggleCardSide, checkAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (userAnswer.toLowerCase() === card.answer.toLowerCase()) {
      setResult('Correct!');
    } else {
      setResult('Wrong! Try again.');
    }
  };

  return (
    <div className="card">
      <div className={`card-content ${showQuestion ? 'question' : 'answer'}`}>
        {showQuestion ? card.question : card.answer}
      </div>
      {showQuestion && (
        <>
          <button onClick={toggleCardSide}>Show Answer</button>
          <hr />
          <input
            type="text"
            placeholder="Your Answer"
            value={userAnswer}
            onChange={handleInputChange}
          />
          <button onClick={handleCheckAnswer}>Check Answer</button>
          {result && <div className="answer-result">{result}</div>}
        </>
      )}
      {!showQuestion && (
        <>
          <button onClick={toggleCardSide}>Show Question</button>
        </>
      )}
    </div>
  );
};

export default Card;
