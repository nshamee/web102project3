import React from 'react';
import Card from './Card';

const CardList = ({ cardData, currentCardIndex, showQuestion, toggleCardSide, checkAnswer }) => {
  const currentCard = cardData[currentCardIndex];

  return (
    <div className="card-list">
      <Card
        card={currentCard}
        showQuestion={showQuestion}
        toggleCardSide={toggleCardSide}
        checkAnswer={checkAnswer} 
      />
    </div>
  );
};

export default CardList;
