import React from 'react'

import ItemDetails, { Record } from '../ItemDetails'
import { WithSwapiService } from '../hoc-helpers'

let PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )

}

let PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

let StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost In Credits" />
      <Record field="cargoCapacity" label="Cargo Capacity" />
    </ItemDetails>
  )
}

const mapPesonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}
// const mapMethodsToProps = (swapiService, target) => {
//   return {
//     getData: swapiService['get'+target],
//     getImageUrl: swapiService['get'+target+'Image']
//   }
// }

PersonDetails = WithSwapiService(PersonDetails, mapPesonMethodsToProps)
PlanetDetails = WithSwapiService(PlanetDetails, mapPlanetMethodsToProps)
StarshipDetails = WithSwapiService(StarshipDetails, mapStarshipMethodsToProps)

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}