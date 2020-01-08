import React from 'react'

import ItemList from '../ItemList'
import { withData } from "../hoc-helpers";
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
getAllPeople,
getAllPlanets,
getAllStarships
} = swapiService

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({name, gender}) => {
  return <span>{name} ( {gender} )</span> 
}
const renderNameDiameter = ({name, diameter}) => {
  return <span>{name} ( {diameter} )</span>
}
const renderNameModel = ({name, model}) => {
  return <span>{name} ( {model} )</span>
}

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople)

const PlanetList = withData(withChildFunction(ItemList, renderNameDiameter), getAllPlanets)

const StarshipList = withData(withChildFunction(ItemList, renderNameModel), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}

// const itemList = (
//   <ItemList onItemSelected={this.onPersonSelected}
//             getData={this.swapiService.getAllPeople}
//   >
//     { i => (
//      `${i.name} (${i.birthYear})` 
//     )}
//   </ItemList>
// )