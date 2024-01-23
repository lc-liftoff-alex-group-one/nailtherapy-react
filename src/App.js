import logo from "./logo.svg";
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import "./styling/BackgroundImage.css";
import Reference from "./components/Reference";

function App() {
  return (

    <div className="App">
          <Navbar/>
          <header>
              <Hours/>
              <Contact/>
              <Reference/>
          </header>

      </div>
  );
}

export default App;



