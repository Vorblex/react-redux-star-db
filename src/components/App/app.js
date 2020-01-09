import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorBoundry from '../ErrorBoundry'
import ErrorIndicator from '../ErrorIndicator'
import PeoplePage from '../PeoplePage'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../SwapiServiceContext';

import './app.css'

export default class extends Component {

  state = {
    swapiService: new DummySwapiService(),
    hasError: false
  }

  changeApiService = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService

      return { swapiService : new Service() }
    })
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }
  
  render() {

    if(this.state.hasError) return <ErrorIndicator />

    return (
      <div className="App container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Header onServiceChange={this.changeApiService} />
            <RandomPlanet />
            <PeoplePage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    )
  }
}
