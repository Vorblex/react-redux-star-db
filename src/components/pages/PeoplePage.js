import React, { Component } from 'react'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PersonList, PersonDetails } from '../SwComponents'

export default class extends Component {

  state = {
    selectedItemId: 1
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
            leftElement={<PersonList onItemSelected={onItemSelected} />}
            rightElement={<PersonDetails itemId={selectedItemId} />} />
      </ErrorBoundry>
    )
  }
}
