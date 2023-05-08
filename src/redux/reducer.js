import initState from '../appRs.js';

const appRs = (state = initState, action) => {
  const { type, text } = action;
  switch(type) {
    case "change":
      return Object.assign({}, state, action)
    case "changeMenu":
      const menu = state.menu;
      state.menu = menu.concat(text)
      return state
    default:
      return state
  }
}

export default appRs
