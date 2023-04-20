// import './App.css';
// import React from 'react'
// import { Routes, Route } from "react-router-dom";
// import LandingPage from './components/landing/LandingPage'
// import Films from './pages/films/Films' 
// import Characters from './pages/characters/Characters'
 

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/films" element={<Films />} />
//         <Route path="/films/:id/characters" element={<Characters />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import Loader from './components/loader/Loader'
import Notfound from './pages/notfound/Notfound.jsx'
const LazyLanding = lazy(() => import('./components/landing/LandingPage'));
const LazyFilms = lazy(() => import('./pages/films/Films'));
const LazyCharacters = lazy(() => import('./pages/characters/Characters'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Notfound/>} />
        <Route path="/" element={
          <Suspense fallback={<Loader/>}>
            <LazyLanding />
          </Suspense>
        } />
        <Route path="/films" element={
          <Suspense fallback={<Loader/>}>
            <LazyFilms />
          </Suspense>
        } />
        <Route path="/films/:id/characters" element={
          <Suspense fallback={<Loader/>}>
            <LazyCharacters />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
