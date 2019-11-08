import * as React from 'react'
import { useStore } from 'react-redux'
import './index.scss'
import store from '../../store'

const Carousel: React.FC = () => {
  store.subscribe(()=> {
    console.log(count.getState().input.text)
  })
  const count = useStore()
  return <>
    <div className="poster_app">
      <div className="poster_pic"/>
      <div>{count.getState().input.text}</div>
    </div>
  </>
}

export default Carousel