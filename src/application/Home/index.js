import React from 'react'
import { renderRoutes } from "react-router-config"
import {
  Top,
  Tab,
  TabItem,
} from './style'
import { NavLink } from 'react-router-dom'

function Home(props) {

  const { route } = props

  return (
    <>
      <Top>
        <span className="title">MyApp</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 首页 </span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
      { renderRoutes (route.routes) }
    </>
  )
}

export default React.memo(Home)