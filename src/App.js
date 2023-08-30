import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import OtherNewYear from './pages/OtherNewYear/OtherNewYear.jsx';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer';
import Quotes from './pages/Quotes';
import Weather from './pages/Weather';
import Home from './pages/Home/Home';
import PocketGames from './pages/PocketGames/PocketGames';
function App() {
  return (
    <Router>

    <div className="App">
     <Link to='/'>     
      <h1>Gadgets Box</h1>
     </Link>
      <Routes> 
      <Route path='/' element={<Home />}> </Route>
      <Route path='/quotes' element={<Quotes/>}> </Route>
      <Route path='/weather' element={<Weather />}> </Route>
      <Route path='/music' element={<MusicPlayer />}> </Route>
      <Route path='/countdown' element={<OtherNewYear />}> </Route>
      <Route path='/games' element={<PocketGames/>}> </Route>
      
      </Routes>
           
    
    </div>
    </Router>
  );
}

export default App;
