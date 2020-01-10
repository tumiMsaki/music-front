import React from 'react'
import { renderRoutes } from "react-router-config"
import { Top } from './style'

function Home(props) {

  const { route } = props

  return (
    <>
      <Top>
        <span className="title">WebApp</span>
      </Top>
      { renderRoutes (route.routes) }
    </>
  )
}

export default React.memo(Home)