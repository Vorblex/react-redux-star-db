import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PersonList, PersonDetails } from '../SwComponents'

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

    const { onPersonSelected, state : { selectedPersonId } } = this

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<PersonList onItemSelected={onPersonSelected} />}
            rightElement={<PersonDetails itemId={selectedPersonId} />} />
      </ErrorBoundry>
    )
  }
}
