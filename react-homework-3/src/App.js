import List from './components/List';
import Box from './components/Box';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <List />
      {isShow && <Box />}
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
    </div>
  );
}

export default App;