import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import RandomPlanet from './Components/Random-planet/RandomPlanet';
import ItemList from './Components/Item-list/ItemList';

export default  class App extends React.Component{

  state = {
    selectedPerson: null
  }


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {



    return (
        <div className="App">
          <div className="container">
              <Header/>
              <RandomPlanet/>
            <div className="app__inner"> 
              <ItemList onItemSelected={this.onPersonSelected}/>
             <div>
               {/* personId={this.state.selectedPerson} */}
               123
             </div>
            </div>
          </div>
        </div>
      );
  }
}

