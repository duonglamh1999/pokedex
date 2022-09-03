import React from 'react'
import './Pokecard.css'


function Pokecard(props) {
  const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <div className='card'>
      <div className='card-name'>{props.name}</div>
      <img src={imgSource} className='card-img' alt='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`'></img>
      <div className='card-type'>{props.type}</div>
      {/* <div className='card-exp'>{props.exp}</div> */}
    </div>
  )
}

export default Pokecard