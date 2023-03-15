import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState('running'); // won or lost

  function addGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    checkGameStatus(newGuesses);
  }

  function checkGameStatus(guesses) {
    if (guesses.at(-1) === answer) {
      setStatus('won');
    } else if (guesses.length === 6) {
      setStatus('lost');
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={status !== 'running'} />
      {status === 'won' && (
        <Banner status='happy'>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses.length} guesses</strong>.
        </Banner>
      )}
      {status === 'lost' && (
        <Banner status='sad'>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
