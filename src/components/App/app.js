import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator'
import PeoplePage from '../PeoplePage'

import './app.css'

export default class extends Component {

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
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}


