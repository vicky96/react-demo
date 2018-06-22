import Loadable from 'react-loadable';

const asyncComponent = resolveComponent => {
  return Loadable({
    loader: resolveComponent,
    loading: () => null
  })
}

export default asyncComponent;
