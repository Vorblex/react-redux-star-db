import React, { Component } from 'react'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import SwapiService from '../../services/swapi-service'


import './people-page.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPersonId: 1
  }

  onPersonSelected = (selectedPersonId) => {
    this.setState({
      selectedPersonId
    })
  }

  render() {

    const {selectedPersonId} = this.state

    return (
      <div className="PeoplePage row mb-2">
        <div className="col-md-6  mb-3">
          <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPersonId} />
        </div>
      </div>
    )
  }
}
