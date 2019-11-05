import * as TYPE from '../types'

const Num = {
  add() {
    return {
      type: TYPE.ADD,
    }
  },
  reduce() {
    return {
      type: TYPE.REDUCE
    }
  }
}

export default Num