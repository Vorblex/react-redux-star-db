import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

export default (Wrapped, mapMethodsToProps) => {
  
  return props => {

    return (
      <SwapiServiceConsumer>
        { (swapiService) => (
          <Wrapped {...props} {...mapMethodsToProps(swapiService)} />
          )
        }
      </SwapiServiceConsumer>
    )
  }
}