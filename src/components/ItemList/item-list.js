import React from 'react'
import SwapiService from '../../services/swapi-service'
import { withData } from "../hoc-helpers"

import './item-list.css'

const ItemList = ({data, onItemSelected, children : renderLabel}) =>  {

  const list = data.map(({id, ...item}) => {

    const label = renderLabel(item)

    return (
      <li className="list-group-item"
          key={id}
          onClick={ () => onItemSelected(id) }>
        {label}
      </li> 
    )
  })

    return (
      <ul className="ItemList list-group">
        {list}
      </ul>
    )
}

const { getAllPeople } = new SwapiService()

export default withData(ItemList, getAllPeople)

