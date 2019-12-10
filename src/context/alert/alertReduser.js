import { SHOW_ALERT, HIDE_ALERT } from "../types"

const handlers = {
  [SHOW_ALERT]: (state, {...payload}) => ({...payload, visible: true}),
  [HIDE_ALERT]: (state) => ({...state, visible: false}),
  DEFAULT: state => state
}

export const alertReduser = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}