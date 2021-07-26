import logo from './logo.svg';
import './App.css';

import TextCompoents from './components/TextComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Shane's React Playground
        </p>
        <TextCompoents />
      </header>
    </div>
  );
}

export default App;
