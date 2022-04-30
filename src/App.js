import React, {useState} from 'react';
import './style.css';

const App = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);

  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange}/>
      {inputValue}
    </div>
  );
};

export default App;
