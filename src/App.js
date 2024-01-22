import logo from "./logo.svg";
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import CreateAccountForm from "./components/Create";
import LoginForm from "./components/Login";
function App() {
  return (
      <div className="App">
          <Navbar />
          <header>
       {/* <CreateAccountForm /> */}
       <LoginForm />
          </header>
      </div>
  );
}

export default App;
