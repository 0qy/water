import { DISPLAY_START, HIDE_START } from '../actions/startDisplayActions'

export default function startReducer (state = true, action) {
  switch (action.type) {
    case DISPLAY_START:
      return true
    case HIDE_START:
      return false
    default:
      return state
  }
}
