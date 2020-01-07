import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator'

import './error-boundry.css'

export default class extends Component {

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true}) 
  }

  render() {

    if(this.state.error) return <ErrorIndicator />

    return this.props.children
  }
}
