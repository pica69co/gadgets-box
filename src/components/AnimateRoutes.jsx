import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import OtherNewYear from "../pages/OtherNewYear/OtherNewYear";
import MusicPlayer from "../pages/MusicPlayer/MusicPlayer";
import Quotes from "../pages/Quotes";
import Weather from "../pages/Weather";
import Home from "../pages/Home/Home";
import PocketGames from "../pages/PocketGames/PocketGames";
import Game2048 from "./Game2048/Game2048";
import TicTac from "./Tic-Tac/Tic-Tac";
import MemoryGame from "./MemoryGame/MemoryGame";
import Tetris from "./Tetris/Tetris";
import PocketWikis from "../pages/Home/PocketWikis/PocketWikis";
import VideoGames from "../pages/wikis/VideoGames/VideoGames";
import Movies from "../pages/wikis/Movies/Movies";
import Countries from "../pages/wikis/Countries/Countries";
import Dogs from "../pages/wikis/Dogs/Dogs";
import PokemonWiki from "../pages/wikis/PokemonWiki/PokemonWiki";
import Time from "../components/Time/Time";
import Storm from "../pages/Storm/Storm";
import Interactive from "../pages/Storm/Views/Interactive";
import ActiveStorms from "../pages/Storm/Views/ActiveStorms";
import Atlantic from "../pages/Storm/Views/Atlantic";
import Pacific from "../pages/Storm/Views/Pacific";
import Central from "../pages/Storm/Views/Central";
import Caribean from "../pages/Storm/Views/Caribean";
import WorldMaps from "../pages/Storm/Views/WorldMaps";
import Satellite from "../pages/Storm/Views/Satellite";
import Webcams from "../pages/Storm/Views/Webcams";
const AnimateRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/quotes" element={<Quotes />}>
            {" "}
          </Route>
          <Route path="/weather" element={<Weather />}>
            {" "}
          </Route>
          <Route path="/music" element={<MusicPlayer />}>
            {" "}
          </Route>
          <Route path="/countdown" element={<OtherNewYear />}>
            {" "}
          </Route>
          <Route path="/games" element={<PocketGames />}>
            {" "}
          </Route>
          <Route path="/2048" element={<Game2048 />}>
            {" "}
          </Route>
          <Route path="/tic-tac" element={<TicTac />}>
            {" "}
          </Route>
          <Route path="/memory" element={<MemoryGame />}>
            {" "}
          </Route>
          <Route path="/tetris" element={<Tetris />}>
            {" "}
          </Route>
          <Route path="/wikis" element={<PocketWikis />}>
            {" "}
          </Route>
          <Route path="/video-games" element={<VideoGames />}>
            {" "}
          </Route>
          <Route path="/movies" element={<Movies />}>
            {" "}
          </Route>
          <Route path="/countries" element={<Countries />}>
            {" "}
          </Route>
          <Route path="/dogs" element={<Dogs />}>
            {" "}
          </Route>
          <Route path="/pokemon" element={<PokemonWiki />}></Route>
          <Route path="/time" element={<Time />}></Route>
          <Route path="/storm" element={<Storm />}></Route>
          <Route path="/storm/active-storms" element={<ActiveStorms />}></Route>
          <Route
            path="/storm/conditions-atlantic"
            element={<Atlantic />}
            ></Route>
          <Route path="/storm/conditions-pacific" element={<Pacific />}></Route>
          <Route
            path="/storm/interactive-forecast-models"
            element={<Interactive />}
            ></Route>
          <Route
            path="/storm/conditions-central-america"
            element={<Central />}
            ></Route>
          <Route
            path="/storm/conditions-caribbean"
            element={<Caribean />}
            ></Route>
          <Route path="/storm/world-maps" element={<WorldMaps />}></Route>
          <Route path="/storm/satellite-images" element={<Satellite />}></Route>
          <Route path="/storm/webcams" element={<Webcams />}></Route>
          {/* <Route path="/storm/webcams/video-player" element={<VideoPlayer />}></Route> */}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes