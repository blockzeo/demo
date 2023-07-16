此demo用了{ router axios redux less }等模块

router主要用于控制路由，让你可以在单页面中渲染所有的组件，让你的页面链接变的跟好看，还能通过链接传递一定的数据
在app.js 和 router/index.js中出现
app.js
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Routers from './router/index.js'
<Switch>
  {Routers.map(item => {
    const RouteView = item.component;//导入的页面
    return <Route path={'/' + item.key} render={props => {
        return <div className="app-view">
          <RouteView />
        </div>
      }
    }></Route>
  })}
</Switch>
需要路由数据的页面
export default withRouter(Ovewrview);

axios用于与后代接口对接，其他对接模块还有fetch，ajax
在api.js中出现
import axios from 'axios';
import { GLOBAL_API_DOMAIN } from '../config/index.js'

const request = axios.create({
    baseURL: GLOBAL_API_DOMAIN,
    timeout: 60000,
    withCredentials: false
});

request.interceptors.request.use( async (config) => {
    return config
}, function(error){
  return Promise.reject(error)
})

request.interceptors.response.use( async (response) => {
  return response
}, function(error) {
  return Promise.reject(error)
});

export default request
需要引用的页面
async function logout() {
    let data = await request.post('common-api/logout');
    return data;
}

redux主要用于在页面各个组件中传递数据
在redux设置，在各个需要的页面中都会出现

less
antd框架
