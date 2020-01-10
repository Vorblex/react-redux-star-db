import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PlanetList, PlanetDetails } from '../SwComponents'

export default class extends Component {

  state = {
    selectedPlanetId: 15
  }

  onPlanetSelected = (selectedPlanetId) => {
    this.setState({
      selectedPlanetId
    })
  }

  render() {

    const { onPlanetSelected, state : { selectedPlanetId } } = this

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<PlanetList onItemSelected={onPlanetSelected} />}
            rightElement={<PlanetDetails itemId={selectedPlanetId} />} />
      </ErrorBoundry>
    )
  }
}
