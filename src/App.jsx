import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [image, setImage] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Math Error');
        setInput('');
      }
    } else if (value === 'Clear') {
      setResult('');
      setInput('');
    } else if (value === 'Show tys image') {
      setImage('../public/IMG_6681.JPG');
    } else {
      setInput((prev) => prev + value);
    }
  }

  return (
    <div className="Calculator">
      <h1>Simple Calculator</h1>
      <div className="Screen">
        <input type="text" readOnly value={input} placeholder="0" />
        <input type="text" readOnly value={result} placeholder="Result" />
      </div>
      <div className="Button-Row">
        {['7', '8', '9', '/'].map((item) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('Clear')}>Clear</button>
      </div>
      <div className="darkmode">
      <button onClick={() => handleClick('Show tys image')}>Show tys image</button>
      </div>
      <div className="image">
        {image ? (<img src={image} />) : (<img src={'../public/sussy.jpg'} />)}
      </div>
    </div> 

  );
}

export default Calculator;