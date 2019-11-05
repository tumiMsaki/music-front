import * as TYPE from '../types'

const preState = {
  text: null
}

const reducer = (state = preState, action: any) => {
  switch(action.type) {
    case TYPE.SEARCH: 
      return {
        text: action.text
      }
      default: return state;
  }
}

export default reducer
