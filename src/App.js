import logo from "./logo.svg";
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import ServicesList from "./components/Services";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <header>
              <Hours/>
              <Contact/>
          </header>
          <ServicesList />
      </div>
  );
}

export default App;
