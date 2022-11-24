import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext'


const People = () => {

    const { store, actions } = useContext(Context);
    const starWarsCharacters = store.people.map((character, index) => {
        return (
            <div key={index} className='card col-sm-4'>

                <div className='card-header '>{character.name}</div>
                <img 
                src={`https://starwars-aws.s3.amazonaws.com/img/characters/${character.name}.jpg`}
                className = "card-img-top card-details mt-3 mb-1 "
                />
                <div className='card-details'>
                    Character Height: {character.height}
                    <br></br>
                    Character Birthday: {character.birth_year}
                </div>
                <div className='button-card'>
                    <button>
                        Learn More!
                    </button>
                    <button
                    onClick={() => actions.addToFavorites(character.name)}
                    className='fas fa-heart btn fav-btn'
                    >
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div>
            {starWarsCharacters}
        </div>
    )
}

export default People;