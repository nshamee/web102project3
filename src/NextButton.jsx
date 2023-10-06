import React from 'react';

const NextButton = ({ showNextCard }) => {
  return (
    <button className="next-button" onClick={showNextCard}>
      Next Card
    </button>
  );
};

export default NextButton;