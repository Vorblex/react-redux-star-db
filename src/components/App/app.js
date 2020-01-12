import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorBoundry from '../ErrorBoundry'
import ErrorIndicator from '../ErrorIndicator'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { StarshipDetails } from '../SwComponents'

import { SwapiServiceProvider } from '../SwapiServiceContext'

import './app.css'

export default class extends Component {

  state = {
    swapiService: new SwapiService(),
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
            <Router>
              <Header onServiceChange={this.changeApiService} />
              <RandomPlanet updateInterval={8e3} />
              <Switch>
                <Route path="/" exact render={() => <h2>Welcome to Star Db</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/people" exact render={() => <h2>People page</h2>} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id" render={({match}) => {
                  const { id } = match.params
                  return (
                    <StarshipDetails itemId={id} />
                  )
                }} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    )
  }
}
