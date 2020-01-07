import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

import './item-details.css'

export default class extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    image: null,
    loading: true,
    error: false
  }

  onItemLoaded = item => {
    const { getImageUrl } = this.props
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false,
        error: false
      })
  }

  _onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateItem() {
    const { itemId, getData} = this.props
    if(!itemId) return

    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this._onError)
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId === prevProps.itemId) return
    this.updateItem()
  }

  // addChildProp(item) {
  //   return React.Children.map( this.props.children, child => {
  //     return React.cloneElement(child, { item })
  //   } )
  // }

  render() {
    const {item, image, loading, error} = this.state

    if (error) return <ErrorIndicator />
    if(loading) return <div className="d-flex"><Spinner /></div>
    if(!item) return <div className="text-center">Select a person from a list</div>

    return (
      <div className="ItemDetails card flex-row">
        <img className="person-image"
             alt="person"
             src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map( this.props.children, child => {
                return React.cloneElement(child, { item })
              } )
            }
          </ul>
        </div>
      </div>
    )
  }
}


