import Loadable from 'react-loadable';
import Loading from '../components/loading/index.js';
import initState from '../appRs.js';

function showView(key){
  return Loadable({
    loader: () => import('../view/' + key + '/index.js'),
    loading: Loading
  });
}
const initRouters = initState.menu.map(({key, text}) => {
  return {
    key,
    component: showView(key)
  }
})
const Routers = [...initRouters]

const OverviewView = Loadable({
  loader: () => import('../view/overview/index.js'),
  loading: Loading
});
const ManageView = Loadable({
  loader: () => import('../view/manage/index.js'),
  loading: Loading
});
const MenuView = Loadable({
  loader: () => import('../view/menu/index.js'),
  loading: Loading
});



export default Routers
