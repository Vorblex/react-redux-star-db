import React from 'react'

import ItemDetails, { Record } from '../ItemDetails'
import { WithSwapiService } from '../hoc-helpers'

let PersonDetails = ({ itemId , getData, getImageUrl }) => {
  return (
    <ItemDetails itemId={itemId}
    getData={getData}
    getImageUrl={getImageUrl}
    >
    <Record field="gender" label="Gender" />
    <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )

}

let PlanetDetails = ({itemId, swapiService : { getPlanet, getPlanetImage }}) => {
  return (
    <ItemDetails itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
    >
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

let StarshipDetails = ({itemId, swapiService : { getStarship, getStarshipImage }}) => {
  return (
    <ItemDetails itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}
    >
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost In Credits" />
    <Record field="cargoCapacity" label="Cargo Capacity" />
    </ItemDetails>
  )
}

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

PersonDetails = WithSwapiService(PersonDetails, mapMethodsToProps)
PlanetDetails = WithSwapiService(PlanetDetails)
StarshipDetails = WithSwapiService(StarshipDetails)

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}