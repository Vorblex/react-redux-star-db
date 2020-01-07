import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

import './item-details.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    loading: true,
    error: false
  }

  onItemLoaded = item => {
      this.setState({
        item,
        loading: false,
        error: false
      })
  }

  _onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateItem() {
    const { itemId } = this.props
    if(!itemId) return

    this.swapiService
      .getPerson(itemId)
      .then(this.onItemLoaded)
      .catch(this._onError)
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId === prevProps.itemId) return
    this.updateItem()
  }

  render() {
    const {item, loading, error} = this.state
    
    if (error) return <ErrorIndicator />
    if(loading) return <div className="d-flex"><Spinner /></div>
    if(!item) return <div className="text-center">Select a person from a list</div>

    const {id, name, gender,
           birthYear, eyeColor} = item

    return (
      <div className="ItemDetails card flex-row">
        <img className="person-image"
             alt="person"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


