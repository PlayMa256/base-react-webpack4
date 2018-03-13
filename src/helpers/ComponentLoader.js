import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export default pageName =>
  Loadable({
    loader: () => import(`../screens/${pageName}`),
    loading: Loading
  });
