import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'

import './item-list.css'

export default class extends Component {

  swapiService = new SwapiService()

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

  renderItems(itemList) {
    return itemList.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {name}
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


