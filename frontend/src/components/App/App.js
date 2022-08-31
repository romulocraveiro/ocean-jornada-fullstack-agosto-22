
import './App.css';
import Jogo from '../Jogo/Jogo'
import HighScore from '../HighScore/HighScore';
import { useState } from 'react';

function App() {
  const [gameOver, setGameOver] = useState(true);

  function onDeath(){
    console.log("App -> onDeath")
  }

  return (
    <div className="App">
      <Jogo onDeath ={onDeath}/>
      {gameOver && <HighScore />}
    </div>
  );
}

export default App;
