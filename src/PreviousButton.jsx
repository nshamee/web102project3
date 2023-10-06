import React from 'react';

const PreviousButton = ({ showPreviousCard }) => {
  return (
    <button className="previous-button" onClick={showPreviousCard}>
      Previous Card
    </button>
  );
};

export default PreviousButton;