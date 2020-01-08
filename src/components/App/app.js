import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorBoundry from '../ErrorBoundry'
import ErrorIndicator from '../ErrorIndicator'
import PeoplePage from '../PeoplePage'
import SwapiService from '../../services/swapi-service'

import { SwapiServiceProvider } from '../SwapiServiceContext';

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

    return (
      <div className="App container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
            <Header />
            <RandomPlanet />
            <PeoplePage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    )
  }
}
