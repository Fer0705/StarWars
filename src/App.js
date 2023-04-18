import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/landing/LandingPage'
import Films from './pages/films/Films'
import Characters from './pages/characters/Characters'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/films" element={<Films />} />
        {/* <Route path="/personajes" element={<Characters />} /> */}
        <Route path="/films/:id/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
