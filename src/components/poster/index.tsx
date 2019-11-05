import * as React from 'react'
import './index.scss'
import store from '../../store'

const Carousel: React.FC = () => {
  store.subscribe(()=> {
    console.log(store.getState())
  })
  return <>
    <div className="poster_app">
      <div className="poster_pic"/>
    </div>
  </>
}

export default Carousel