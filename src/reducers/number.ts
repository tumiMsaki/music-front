import * as TYPE from '../types'

const initState = {
  count: 0
}

type Action =
  | { type: 'ADD' }
  | { type: 'REDUCE' }

const reducer = (state = initState, action: Action) => {
  switch(action.type) {
    case (TYPE.ADD): 
      return {
        count: state.count + 1
      }
    case (TYPE.REDUCE):
      return {
        count: state.count - 1
      }
    default: return state
  }
}

export default reducer