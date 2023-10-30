import React from 'react';
import Counter from './pages/counterr/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './Layout/NavMenu';
import Home from './pages/home/Home';
import Stopwatch from './pages/stopwatch/Stopwatch';
import BmiCalculator from './pages/bmiCalculator/BmiCalculator';
import TicTacToe from './pages/tic-tac-toe/TicTacToe';


const App = () => {


  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = 'counter' element = { <Counter /> } />
        <Route path = 'stopwatch' element = { <Stopwatch />} />
        <Route path = 'bmiCalculator' element = {<BmiCalculator />} />
        <Route  path='tictactoe' element = {<TicTacToe />} />
      </Routes>
      

      
    </BrowserRouter>
  )
}

export default App