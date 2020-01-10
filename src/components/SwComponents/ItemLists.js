import React from 'react'

import ItemList from '../ItemList'
import { WithData, WithSwapiService, WithChildFunction } from "../hoc-helpers";
import itemList from '../ItemList/item-list';

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

const compose = (...func) => (component) => {
  return func.reduceRight((res, f) => f(res), component)
}

const PersonList = compose(
                      WithSwapiService(mapPersonMethodsToProps),
                      WithData,
                      WithChildFunction(renderName)
                    )(itemList)

const PlanetList =  WithSwapiService(mapPlanetMethodsToProps)(
                                        WithData(
                                            WithChildFunction(renderNameDiameter)(ItemList)))

const StarshipList = WithSwapiService(mapStarsStarshipMethodsToProps)(
                                        WithData(
                                            WithChildFunction(renderNameModel)(ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList
}



// const PersonList = WithSwapiService(mapPersonMethodsToProps)(
//                                       WithData(
//                                           WithChildFunction(renderName)(ItemList)))

// const itemList = (
//   <ItemList onItemSelected={this.onPersonSelected}
//             getData={this.swapiService.getAllPeople}
//   >
//     { i => (
//      `${i.name} (${i.birthYear})` 
//     )}
//   </ItemList>
// )