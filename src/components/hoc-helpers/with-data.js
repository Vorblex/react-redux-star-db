import React, { Component } from 'react'
import Spinner from '../Spinner'
// import ErrorIndicator from '../ErrorIndicator'

export default (View) => {
  return class extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.getData === this.props.getData) return

      this.update()
  }

  update() {
    this.props.getData()
      .then( data => {
        this.setState({
          data
        })
      })
  }

    render() {

      const {data} = this.state

      if(!data) return <Spinner />
  
      return <View {...this.props} data={data} />
    }
  }
}
