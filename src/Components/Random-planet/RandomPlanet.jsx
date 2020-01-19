import React from 'react';
import './RandomPlanet.scss';
import SwapiService from './../../Api/Api';
import Loading from '../Loading/Loading';


export default class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
        }
       
    swapiService = new SwapiService();

    state = {
        planet: {}
    };


    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }



    updatePlanet() {
        const id = Math.floor(Math.random()*25) +2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
    };

  
    


    render() {
        const { planet: { population, rotationPeriod, diameter, name, id }} = this.state;
        return (
            <section className="randomP">
                <div className="randomP__inner">
                    <Loading/>
                    <div className="randomP__img">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                    </div>
                    <div className="randomP__info">
                        <h1>{name}</h1>
                        <div>Population {population}</div>
                    <div>Ratation Period {rotationPeriod}</div>
                        <div>Diameter {diameter}</div>
                    </div>

                </div>
            </section>
        )
    }
   
}
