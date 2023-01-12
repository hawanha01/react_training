import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Image from './components/image/image';
import Summary from './components/summary/summary';
import Menu from './components/Menu/menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Image/>
      <Summary/>
      <Menu/>
    </div>
  );
}

export default App;
