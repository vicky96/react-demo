import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/index.less';
import RouteComponent from './routes/index';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';

const render = () => {
  const store = configStore();

  ReactDOM.render(
    <Provider store={store}>
      <RouteComponent />
    </Provider>, 
    document.getElementById('root'));
}

render(RouteComponent)
registerServiceWorker();
