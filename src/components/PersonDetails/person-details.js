import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'

import './person-details.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    person: null,
    loading: false
  }

  updatePerson() {
    const { personId } = this.props
    if(!personId) return

    this.setState({ loading: true })

    this.swapiService.getPerson(personId)
    .then(person => {
      this.setState({ person })
      this.setState({ loading: false })
    } )
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId === prevProps.personId) return
    this.updatePerson()
  }

  render() {

    if(!this.state.person) return <div className="text-center">Select a person from a list</div>

    const {loading, person: {
            id, name, gender,
            birthYear, eyeColor}} = this.state

    if(loading) return <div className="d-flex"><Spinner /></div>

    return (
      <div className="PersonDetails card flex-row">
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


