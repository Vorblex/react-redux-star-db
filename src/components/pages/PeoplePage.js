import React from 'react'
import { withRouter } from 'react-router-dom'

import ErrorBoundry from '../ErrorBoundry'
import RowComponent from '../RowComponent'
import { PersonList, PersonDetails } from '../SwComponents'

const PeoplePage = ({history, match : {params}}) => {
  return (
    <ErrorBoundry>
        <RowComponent
          leftElement={<PersonList onItemSelected={(id) => history.push(id)} />}
          rightElement={<PersonDetails itemId={params.id} />} />
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage)