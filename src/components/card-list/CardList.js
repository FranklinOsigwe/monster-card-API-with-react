import React from 'react'
import "./cardlist.style.css";
import { Cards } from './Cards/Cards.components';

export const CardList = props => ( 
    <div className='card-list'>
      {props.monsters.map(monster => ( 
        <Cards key={monster.id} monster={monster } />
      ))}
    </div>
)


