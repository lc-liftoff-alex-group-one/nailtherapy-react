import logo from "./logo.svg";
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import CreateAccountForm from "./components/Create";
function App() {
  return (
      <div className="App">
          <Navbar />
          <header>
       <CreateAccountForm />
          </header>
      </div>
  );
}

export default App;
