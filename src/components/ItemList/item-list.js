import React from 'react'

import './item-list.css'

export default ({data, onItemSelected, children : renderLabel}) =>  {

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
