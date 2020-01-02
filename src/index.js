import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import SwapiService from './services/swapi-service'

import './bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'))

const swapi = new SwapiService()

swapi.getAllPlanets()
  .then( people => {
    people.forEach(element => {
      console.log(element.name);
    });
    }
  )
swapi.getPerson('4')
  .then( persone => {
      console.log(persone);
    }
  )