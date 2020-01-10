import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PlanetList, PlanetDetails } from '../SwComponents'

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
            leftElement={<PlanetList onItemSelected={onItemSelected} />}
            rightElement={<PlanetDetails itemId={selectedItemId} />} />
      </ErrorBoundry>
    )
  }
}
