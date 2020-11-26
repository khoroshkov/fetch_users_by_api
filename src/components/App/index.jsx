import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Common/Header';

import routes from '../../services/routes';
import types from '../../redux/types';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.GET_USERS_START });
  }, [dispatch]);

  return (
    <div className="container pt-4">
      <Header />
      <Suspense fallback={null}>
        <Switch>
          <Route
            exact
            path={routes.root.path}
            component={routes.root.component}
          />

          <Route
            exact
            path={`${routes.editUser.path}:userId`}
            component={routes.editUser.component}
          />

          <Route
            exact
            path={routes.newUser.path}
            component={routes.newUser.component}
          />

          <Redirect to={routes.root.path} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
