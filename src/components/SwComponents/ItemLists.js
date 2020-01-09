import React from 'react'

import ItemList from '../ItemList'
import { WithData, WithSwapiService } from "../hoc-helpers";

const WithChildFunction = (Wrapped, fn) => {
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

const mapPersonMethodsToProps = ({getAllPeople : getData}) => {
  return { getData }
}
const mapPlanetMethodsToProps = ({getAllPlanets : getData}) => {
  return { getData }
}
const mapStarsStarshipMethodsToProps = ({getAllStarships : getData}) => {
  return { getData }
}

const PersonList = WithSwapiService(
                      WithData(
                          WithChildFunction(ItemList, renderName)),
                      mapPersonMethodsToProps)

const PlanetList =  WithSwapiService(
                      WithData(
                          WithChildFunction(ItemList, renderNameDiameter)),
                      mapPlanetMethodsToProps)

const StarshipList = WithSwapiService(
                      WithData(
                          WithChildFunction(ItemList, renderNameModel)),
                      mapStarsStarshipMethodsToProps)

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