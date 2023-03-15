import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessCell({ letter, status }) {
  return <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>;
}

function Guess({ value, correctAnswer }) {
  const cellData = checkGuess(value, correctAnswer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <GuessCell
          key={num}
          letter={cellData ? cellData[num].letter : null}
          status={cellData ? cellData[num].status : null}
        />
      ))}
    </p>
  );
}

export default Guess;
