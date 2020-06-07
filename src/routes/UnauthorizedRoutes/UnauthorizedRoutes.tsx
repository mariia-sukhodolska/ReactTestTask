import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { APP_PATH } from '../Routes.helpers';

export const UnauthorizedRoutes: FC = () => {
  return (
    <Switch>
      <Route path={APP_PATH.HOME} render={() => <div>Home page</div>} />
      <Route path={APP_PATH.ERROR} render={() => <div>Error page</div>} />

      <Redirect to={APP_PATH.HOME} />
    </Switch>
  );
};
