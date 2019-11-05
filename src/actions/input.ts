import * as TYPE from '../types/index'

const Search = {
  search(text: string){
    return ({
      type: TYPE.SEARCH,
      text
    })
  } 
}

export default Search