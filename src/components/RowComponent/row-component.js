import React from 'react'

export default ({leftElement, rightElement}) => {

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