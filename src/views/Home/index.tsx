import * as React from 'react'
import { NavLink } from 'react-router-dom'

export const Home: React.FC = () => {
  return <>
    <div className="Home_header">
      <NavLink to="/recommend">recommend</NavLink>
      <NavLink to="/rank">Rank</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  </>
}