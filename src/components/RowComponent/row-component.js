import React from 'react'
import PropTypes from 'prop-types'

export default function Row ({leftElement, rightElement}) {

  return (
    <div className="RowComponent row mb-2">
      <div className="col-md-6  mb-3">
        {leftElement}
      </div>
      <div className="col-md-6">
        {rightElement}
      </div>
    </div>
  )
}

Row.propTypes = {
  leftElement: PropTypes.node,
  rightElement: PropTypes.node
}