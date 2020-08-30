import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../store';
import Routes from '../Routes';

type Props = {
  store: Store;
  history: History;
};

const Root = (props: Props) => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
