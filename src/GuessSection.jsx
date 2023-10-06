import React, { useState } from 'react';

const GuessSection = ({ card, checkAnswer }) => {
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmitGuess = () => {
    if (guess.toLowerCase() === card.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="guess-section">
      <div>
        <label htmlFor="guessInput">Guess the answer here:</label>
        <input
          type="text"
          id="guessInput"
          value={guess}
          onChange={handleGuessChange}
        />
      </div>
      <button onClick={handleSubmitGuess}>Submit Guess</button>
      {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
    </div>
  );
};

export default GuessSection;
