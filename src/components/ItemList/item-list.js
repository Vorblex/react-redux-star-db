import React, { Component } from 'react'
import Spinner from '../Spinner'

import './item-list.css'

export default class extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {

    const {getData} = this.props

    getData()
      .then( itemList => {
        this.setState({
          itemList
        })
      })
  }

  renderItems = itemList => {
    return itemList.map(({id, ...item}) => {

      const label = this.props.children(item)

      return (
        <li className="list-group-item"
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {label}
        </li> 
      )
    })
  }

  render() {
    const {itemList} = this.state
    if(!itemList) return <Spinner />

    const list = this.renderItems(itemList)

    return (
      <ul className="ItemList list-group">
        {list}
      </ul>
    )
  }
}


