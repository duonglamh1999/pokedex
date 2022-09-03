import React from 'react'
import Pokecard from './Pokecard'
function Pokedex(props) {
  return (
    <div>
      <div className='dex-title'>Pokedex</div>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex