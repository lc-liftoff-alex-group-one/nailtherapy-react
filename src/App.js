import logo from "./logo.svg";
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
      <div className="App">
          <Navbar />
          <header>
       <CreateAccount/>
          </header>
      </div>
  );
}

export default App;
