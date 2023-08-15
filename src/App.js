import logo from './logo.svg';
import './App.scss';

function App() {

  const userName = 'admin'

  return (
    <div className="App-header">
      <div className="App">
          <Myheader name={userName} />
      </div>
    </div>
  );
}

export default App;
const Myheader = ({ name }) => {

  return (
    <div>
      <h1 className="op3">Haslo, {name}</h1>
    </div>
  )
}