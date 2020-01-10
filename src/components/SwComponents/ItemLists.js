import React from 'react'

import ItemList from '../ItemList'
import { WithData, WithSwapiService } from "../hoc-helpers";

const WithChildFunction = (fn) => (Wrapped) => {
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

const PersonList = WithSwapiService(mapPersonMethodsToProps)
                                      (WithData(
                                          WithChildFunction(renderName)(ItemList) ))

const PlanetList =  WithSwapiService(mapPlanetMethodsToProps)
                                        (WithData(
                                            WithChildFunction(renderNameDiameter)(ItemList) ))

const StarshipList = WithSwapiService(mapStarsStarshipMethodsToProps)
                                        (WithData(
                                            WithChildFunction(renderNameModel)(ItemList) ))

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