import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NewYear from './pages/NewYear/NewYear';
import OtherNewYear from './pages/OtherNewYear/OtherNewYear.jsx';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer';
import Quotes from './pages/Quotes';
import Weather from './pages/Weather';
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>

    <div className="App">
     
      <h1>Gadgets Box</h1>
      <Routes> 
      <Route path='/' element={<Home />}> </Route>
      <Route path='/quotes' element={<Quotes/>}> </Route>
      <Route path='/weather' element={<Weather />}> </Route>
      <Route path='/music' element={<MusicPlayer />}> </Route>
      <Route path='/countdown' element={<OtherNewYear />}> </Route>
      </Routes>
           
    
    </div>
    </Router>
  );
}

export default App;
