import { PLAY } from '../actions/playAction'

export default function reducer (state = false, action) {
  switch (action.type) {
    case PLAY:
      return true
    default:
      return state
  }
}
