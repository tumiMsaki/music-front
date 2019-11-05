import * as React from 'react'
import './index.scss'
import input from '../../actions/input'
import number from '../../actions/number'
import store from '../../store'

const Search: React.FC = (props) => {
  const [val, setVal] = React.useState()
  
  React.useEffect(() => {
    store.dispatch(input.search(val))
    store.dispatch(number.add())
  },[val])

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }
  return <>
    <div className="search_app">
      <input onChange={handleInput}/>
    </div>
  </>
}

export default Search