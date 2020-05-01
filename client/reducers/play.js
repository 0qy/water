import { PLAY, LEAVE } from '../actions/playAction'

export default function reducer (state = false, action) {
  switch (action.type) {
    case PLAY:
      return true
    case LEAVE:
      return false
    default:
      return state
  }
}
