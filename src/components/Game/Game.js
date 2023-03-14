import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess) {
    setGuesses([
      ...guesses,
      {
        id: crypto.randomUUID(),
        label: guess,
      },
    ]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
