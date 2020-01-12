import React from 'react'

import ErrorBoundry from '../ErrorBoundry'
import { StarshipList } from '../SwComponents'
import { withRouter } from 'react-router-dom'

const StarshipsPage = ({history}) => {
    return (
      <ErrorBoundry>
        <StarshipList onItemSelected={(id) => history.push(id)} />
      </ErrorBoundry>
    )
}

export default withRouter(StarshipsPage)