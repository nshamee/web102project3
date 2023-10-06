import React, { useState } from 'react';
import Header from './Header';
import CardList from './CardList';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import './App.css';
import cardData from './cardData';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleCardSide = () => {
    setShowQuestion(!showQuestion);
  };

  const showNextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardData.length);
    } while (newIndex === currentCardIndex);

    setCurrentCardIndex(newIndex);
    setShowQuestion(true);
  };

  const showPreviousCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardData.length);
    } while (newIndex === currentCardIndex);

    setCurrentCardIndex(newIndex);
    setShowQuestion(true);
  };

  const checkAnswer = (userAnswer) => {
    const currentCard = cardData[currentCardIndex];
    if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
      return 'Correct!';
    } else {
      return 'Wrong! Try again.';
    }
  };

  return (
    <div className="App">
      <Header />
      <CardList
        cardData={cardData}
        currentCardIndex={currentCardIndex}
        showQuestion={showQuestion}
        toggleCardSide={toggleCardSide}
        checkAnswer={checkAnswer}
      />
      <div className="button-container">
        <PreviousButton showPreviousCard={showPreviousCard} />
        <NextButton showNextCard={showNextCard} />
      </div>
    </div>
  );
}

export default App;
