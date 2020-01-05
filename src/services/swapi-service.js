export default class {

  _apiBase = 'https://swapi.co/api'

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`)

    return await res.json()
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    return res.results.map(this._transformPerson).slice(0, 5)
  }

  getPerson = async id => {
    const res = await this.getResource(`/people/${id}`)
    return  this._transformPerson(res) 
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`)
    return res.results.map(this._transformPlanet)
  }

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`)
    return res.results
  }

  getStarship = async id => {
    return this.getResource(`/starships/${id}`)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPerson = ({birth_year : birthYear,eye_color: eyeColor, ...rest}) => {
    return {
      id: this._extractId(rest),
      birthYear,
      eyeColor,
      ...rest
    }
  }

  _transformPlanet = ({rotation_period : rotationPeriod, ...rest}) => {
    return {
      id: this._extractId(rest),
      rotationPeriod,
      ...rest
    }
  }
  
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      starship
    }
  }
  
}