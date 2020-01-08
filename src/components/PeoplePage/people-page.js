import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PersonList, PersonDetails, PlanetList , PlanetDetails, StarshipDetails, StarshipList } from '../SwComponents'

import './people-page.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPersonId: 1,
    selectedPlanetId: 15,
    selectedStarshipId: 15
  }

  onPersonSelected = (selectedPersonId) => {
    this.setState({
      selectedPersonId
    })
  }
  onPlanetSelected = (selectedPlanetId) => {
    this.setState({
      selectedPlanetId
    })
  }
  onStarshipSelected = (selectedStarshipId) => {
    this.setState({
      selectedStarshipId
    })
  }

  renderPeopleItem = ({name, birthYear}) => {
    return `${name} (${birthYear})` 
  }
  renderItem = ({name, birthYear}) => {
    return `${name}` 
  }

  render() {

    const {onPersonSelected, onPlanetSelected, onStarshipSelected, renderPeopleItem, renderItem} = this
    const {selectedPersonId, selectedPlanetId, selectedStarshipId} = this.state
    // const itemList = (
    //   <ItemList onItemSelected={this.onPersonSelected}
    //             getData={this.swapiService.getAllPeople}
    //   >
    //     { i => (
    //      `${i.name} (${i.birthYear})` 
    //     )}
    //   </ItemList>
    // )

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<PersonList onItemSelected={onPersonSelected}>{renderPeopleItem}</PersonList>}
            rightElement={<PersonDetails itemId={selectedPersonId} />} />
          <RowComponent
            leftElement={<PlanetList onItemSelected={onPlanetSelected}>{renderItem}</PlanetList>}
            rightElement={<PlanetDetails itemId={selectedPlanetId} />} />
          <RowComponent
            leftElement={<StarshipList onItemSelected={onStarshipSelected}>{renderItem}</StarshipList>}
            rightElement={<StarshipDetails itemId={selectedStarshipId} />} />
      </ErrorBoundry>
    )
  }
}
