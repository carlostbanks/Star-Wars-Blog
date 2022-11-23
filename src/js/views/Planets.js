import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const Planets = () => {

    const {store, actions} = useContext(Context);
    const StarWarsPlanets = store.planets.map((planet, index) => {
        return (
            <div key={index} className='container'>
                <div className='card-header'>
                    Planet Name: {planet.name}
                </div>
                <div className='card-details'>
                    Planet Diameter: {planet.diameter}
                    <br></br>
                    Planet Climate: {planet.climate}
                </div>
            </div>
        )
    })

    return (
        <div>
            {StarWarsPlanets}
        </div>
    )
}

export default Planets;