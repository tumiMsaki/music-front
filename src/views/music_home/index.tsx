import * as React from 'react'
import Carousel from '../../components/poster'
import Search from '../../components/search'
import './index.scss'

const Home:React.FunctionComponent = () => {
  return <>
    <Search/>
    <Carousel/>
  </>
}

export default Home