import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator'
import PeoplePage from '../PeoplePage'
import SwapiService from '../../services/swapi-service'
// import ItemDetails from '../ItemDetails'
// import RowComponent from '../RowComponent'
// import Record from '../Record'

import './app.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }
  
  render() {

    if(this.state.hasError) return <ErrorIndicator />

    // const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

    // const personDetails = (
    //   <ItemDetails itemId={11}
    //                getData={getPerson}
    //                getImageUrl={getPersonImage}
    //   >
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // )

    // const starshipDetails = (
    //   <ItemDetails itemId={5}
    //                getData={getStarship}
    //                getImageUrl={getStarshipImage}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost In Credits" />
    //     <Record field="cargoCapacity" label="Cargo Capacity" />
    //   </ItemDetails>
    // )

    return (
      <div className="App container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        {/* <RowComponent leftElement={personDetails} rightElement={starshipDetails}/> */}
      </div>
    )
  }
}


