import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const countCharacters = () => {
    return text.length;
  };

  return (
    <div className="word-counter">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        rows="5"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="character-count">Word Count: {countCharacters()}</p>
    </div>
  );
}

export default WordCounter;