import React from 'react'
import PropTypes from 'prop-types'

import './item-list.css'

export default function ItemList ({data, onItemSelected, children : renderLabel}) {

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

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}