import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home-page';
import Champions from './pages/champions-page';
import Regions from './pages/regions-page';
import AboutTheGame from './pages/about-the-game-page';
import Trivia from './pages/trivia-page';
import Sugestions from './pages/question-segest-page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/trivia" element={<Trivia/>}/>
          <Route path="/submit-question" element={<Sugestions/>}/>
          <Route path="/champions" element={<Champions/>}/>
          <Route path="/regions" element={<Regions/>}/>
          <Route path="/about-the-game" element={<AboutTheGame/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
