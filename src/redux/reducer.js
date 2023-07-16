const initState = { //默认状态
  menu: [{
    key: 'overview',
    text: '概览'
  }, {
    key: 'manage',
    text: '管理'
  }, {
    key: 'menu',
    text: '菜单管理'
  }],
}

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
