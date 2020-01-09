import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PersonList, PersonDetails, PlanetList , PlanetDetails, StarshipDetails, StarshipList } from '../SwComponents'

import './people-page.css'

export default class extends Component {

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

  render() {

    const {onPersonSelected, onPlanetSelected, onStarshipSelected} = this
    const {selectedPersonId, selectedPlanetId, selectedStarshipId} = this.state

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<PersonList onItemSelected={onPersonSelected} />}
            rightElement={<PersonDetails itemId={selectedPersonId} />} />
          {/* <RowComponent
            leftElement={<PlanetList onItemSelected={onPlanetSelected} />}
            rightElement={<PlanetDetails itemId={selectedPlanetId} />} />
          <RowComponent
            leftElement={<StarshipList onItemSelected={onStarshipSelected} />}
            rightElement={<StarshipDetails itemId={selectedStarshipId} />} /> */}
      </ErrorBoundry>
    )
  }
}
