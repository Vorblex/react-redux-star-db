import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

export default (Wrapped) => {
  
  return props => {

    return (
      <SwapiServiceConsumer>
        { swapiService => (
          <Wrapped {...props} SwapiService={swapiService} />
        ) }
      </SwapiServiceConsumer>
    )
  }
}