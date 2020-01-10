import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { StarshipList, StarshipDetails } from '../SwComponents'

export default class extends Component {

  state = {
    selectedStarshipId: 15
  }

  onStarshipSelected = (selectedStarshipId) => {
    this.setState({
      selectedStarshipId
    })
  }

  render() {

    const { onStarshipSelected, state : { selectedStarshipId } } = this

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<StarshipList onItemSelected={onStarshipSelected} />}
            rightElement={<StarshipDetails itemId={selectedStarshipId} />} />
      </ErrorBoundry>
    )
  }
}
