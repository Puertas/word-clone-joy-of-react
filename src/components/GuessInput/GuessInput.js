import React, { useState } from 'react';

function GuessInput({ addGuess }) {
  const [value, setValue] = useState('');
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(value);
        setValue('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={value}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        onChange={({ target: { value } }) => setValue(value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
