import store from './index.js'; //获取store

export const changeDis = (text) => {  //用于简化dispatch的代码
  return {
    type: "change",
    text
  }
}

export const changeMenuDis = (key, text) => {  //用于简化dispatch的代码
  return {
    type: "changeMenu",
    text: { key, text }
  }
}

const handleChange = () => { //监听store变化
  console.log(123)
  const currentValue = store.getState();
  if(1 !== currentValue){
    console.log('some')
  }
}

store.subscribe(handleChange)
