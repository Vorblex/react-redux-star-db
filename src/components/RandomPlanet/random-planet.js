import React, { Component } from 'react'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import SwapiService from '../../services/swapi-service'

import './random-planet.css'

export default class RandomPlanet extends Component {

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName]

      if(typeof value === 'number' && !isNaN(value)) return null

      return new TypeError(`${componentName}: ${propName} must be a number`)
    }
  }

  static defaultProps = {
    updateInterval: 5e3
  }

  swapiService = new SwapiService()

  state = {
    planet: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet()

    const { updateInterval } = this.props

    this.interval = setInterval(this.updatePlanet, updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    })
  }

  _onError = err => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this._onError)
  }

  render() {
    const { planet, loading, error } = this.state

    const hasData = !(loading || error)

    const spinner = loading ? <Spinner /> : null
    const errorMessage = error ? <ErrorIndicator /> : null
    const content = hasData ? <PlanetView planet={planet}/> : null

    return (
      <div className="RandomPlanet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {

  const {id, name, population,
         rotationPeriod, diameter } = planet

  return (
    <React.Fragment>
      <img className="planet-image"
           alt="planet"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
