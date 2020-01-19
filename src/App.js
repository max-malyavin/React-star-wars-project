import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import RandomPlanet from './Components/Random-planet/RandomPlanet';

const App = () =>{
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <RandomPlanet/>
         


      </div>
    </div>
  );
}

export default App;
