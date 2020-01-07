import React, { Component } from 'react'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import Record from '../Record'
import { withData } from "../hoc-helpers";

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
    const { getPerson, getPersonImage} = this.swapiService
    // const itemList = (
    //   <ItemList onItemSelected={this.onPersonSelected}
    //             getData={this.swapiService.getAllPeople}
    //   >
    //     { i => (
    //      `${i.name} (${i.birthYear})` 
    //     )}
    //   </ItemList>
    // )

    const PersonList = withData(ItemList, this.swapiService.getAllPeople)

    const personDetails = (
      <ItemDetails itemId={selectedPersonId}
                   getData={getPerson}
                   getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
          <RowComponent leftElement={<PersonList onItemSelected={this.onPersonSelected}>{this.renderPeopleItem}</PersonList>} rightElement={personDetails} />
      </ErrorBoundry>
    )
  }
}
