import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { StarshipList, StarshipDetails } from '../SwComponents'

export default class extends Component {

  state = {
    selectedItemId: 15
  }

  onItemSelected = (selectedItemId) => {
    this.setState({
      selectedItemId
    })
  }

  render() {

    const { onItemSelected, state : { selectedItemId } } = this

    return (
      <ErrorBoundry>
          <RowComponent
            leftElement={<StarshipList onItemSelected={onItemSelected} />}
            rightElement={<StarshipDetails itemId={selectedItemId} />} />
      </ErrorBoundry>
    )
  }
}
