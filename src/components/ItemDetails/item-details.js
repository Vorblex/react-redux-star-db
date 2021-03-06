import React, { Component } from 'react'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

import './item-details.css'

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export default class extends Component {

  state = {
    item: null,
    image: null,
    loading: false,
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

    this.setState({
      loading: true,
      error: false
    })

    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this._onError)
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
          
        this.updateItem();
    }
  }

  addChildProp = () => {
    return React.Children.map( this.props.children, child => {
      return React.cloneElement(child, { item: this.state.item })
    } )
  }

  render() {
    const {item, image, loading, error} = this.state

    if (error) return <ErrorIndicator />
    if(!item && !loading) return <div className="text-center">Select a person from a list</div>
    if(loading) return <div className="d-flex"><Spinner /></div>

    return (
      <div className="ItemDetails card flex-row">
        <img className="person-image"
             alt="person"
             src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            { <this.addChildProp /> }
          </ul>
        </div>
      </div>
    )
  }
}

// {
//   React.Children.map( this.props.children, child => {
//     return React.cloneElement(child, { item })
//   } )
// }
