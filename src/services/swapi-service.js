export default class {

  _apiBase = 'https://swapi.co/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'

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
    return res.results.map(this._transformPlanet).slice(0, 5)
  }

  getPlanet = async id => {
    const res = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(res)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`)
    return res.results.map(this._transformStarship).slice(0, 5)
  }

  getStarship = async id => {
    const res = await this.getResource(`/starships/${id}`)
    return this._transformStarship(res)
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
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

  _transformPlanet = ({ rotation_period : rotationPeriod,
                        orbital_period : orbitalPeriod,
                        ...rest}) => {
    return {
      id: this._extractId(rest),
      rotationPeriod,
      ...rest
    }
  }
  
  _transformStarship = ({ cost_in_credits : costInCredits,
                          cargo_capacity : cargoCapacity,
                          ...rest}) => {
    return {
      id: this._extractId(rest),
      costInCredits,
      cargoCapacity,
      ...rest
    }
  }
  
}