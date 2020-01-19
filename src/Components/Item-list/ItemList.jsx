import React from 'react';
import './ItemList.scss';
import SwapiService from '../../Api/Api';
import Loading from '../Loading/Loading';


export default class ItemList extends React.Component{

    swapiService = new SwapiService();
    
    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService.getAllPeople()
        .then((peopleList)=> {
            this.setState({
                peopleList
            })
        })
    }


    renderItems(arr) {
        return arr.map(({id, name}) => {
            return(
                <li key={id} onClick={()=> this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }


    render() {
        
        const {peopleList} = this.state;
        if(!peopleList) {
            return <Loading/>
        }

        const items = this.renderItems(peopleList)
        return (
        <div>
            <ul>
               {items}
            </ul>
        </div>
    )}  
}

