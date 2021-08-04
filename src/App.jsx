import { useState } from 'react';
import './App.scss';

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="App">
      <nav className={`nav${isActive ? ' active' : ''}`}>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Works</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
        <button className="icon" onClick={() => setIsActive((prev) => !prev)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </div>
  );
}

export default App;
