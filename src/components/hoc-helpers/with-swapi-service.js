import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

export default (mapMethodsToProps) => (Wrapped) => {
  
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

// <SwapiServiceConsumer>
// { (swapiService) => { 
//   let name = Wrapped.name
//   name = name.slice(0, name.indexOf('Details'))
//   return (
//   <Wrapped {...props} {...mapMethodsToProps(swapiService, name)} />
//   )}
// }
// </SwapiServiceConsumer>