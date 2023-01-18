import React, { useState } from 'react';
import './Input.css';

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} >
        {label}
      </label>
    </div>
  );
}

export default function Inputfield({label}) {
  return (
    <div className="App">
      <div className='input'>
        <TextInput label="Phone,email or username" />
      </div>
    </div>
  );
}
