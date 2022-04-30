import React, {useState} from 'react';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter+1);
  };
  return (
    <div>
      {counter} <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default App;
