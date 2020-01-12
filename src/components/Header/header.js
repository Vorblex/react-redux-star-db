/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export default ({ onServiceChange }) => {
  return (
      <div className="Header d-flex">
        <h3>
          <Link to="/">
            StarDB
          </Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
        <button onClick={onServiceChange}
                className="btn btn-primary btm-sm">
          Change Service
        </button>
      </div>
  );
}


