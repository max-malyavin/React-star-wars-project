import React from 'react';
import './RandomPlanet.scss';
import SwapiService from './../../Api/Api';
import Loading from '../Loading/Loading';


export default class RandomPlanet extends React.Component {

   
       
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };


        componentDidMount() {
            this.updatePlanet();
            this.interval = setInterval(this.updatePlanet, 2500);
        }


    onPlanetLoaded = (planet) => {
        this.setState({planet,
        loading: false});
    }


    onError = (err)=> {
        alert("Ошибка")
        this.setState({
            error: true
        })
    }
    updatePlanet = () =>{
        const id = Math.floor(Math.random()*25) +2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
        .catch(this.onError);
    };

  
    


    render() {
        const { planet: { population, rotationPeriod, diameter, name, id }, loading, error} = this.state;


     

        return (
            <section className="randomP">
                <div className="randomP__inner">  


                    {loading ? <Loading/>

                    :  <>
                         <div className="randomP__img">
                        <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Планета"/>
                         </div>
                        <div className="randomP__info">
                                    <h1>{name}</h1>
                                <div>Population {population}</div>
                            <div>Ratation Period {rotationPeriod}</div>
                                <div>Diameter {diameter}</div>
                    </div>
                   
                    </>}

                   
                </div>
            </section>
        )
    }
   
}
