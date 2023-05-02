import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello', value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          type="text"
          placeholder="username"
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default App;
