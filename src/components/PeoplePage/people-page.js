import React, { Component } from 'react'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'

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

  renderPeopleItem = ({name, birthYear}) => {
    return `${name} (${birthYear})` 
  }

  render() {

    const {selectedPersonId} = this.state
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
      >
        { i => (
         `${i.name} (${i.birthYear})` 
        )}
      </ItemList>
    )

    const personDetails = <ItemDetails itemId={selectedPersonId} />

    return (
      <ErrorBoundry>
          <RowComponent leftElement={itemList} rightElement={personDetails} />
      </ErrorBoundry>
    )
  }
}
