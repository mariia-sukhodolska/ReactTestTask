import React, { FC, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { APP_PATH } from '../Routes.helpers';
import { TVShows } from '../../features/TVShows/TVShows';

export const UserRoutes: FC = () => {
  return (
    <Switch>
      <Route path={APP_PATH.HOME} render={() => <div>Home page</div>} />
      <Route path={APP_PATH.ERROR} render={() => <div>Error page</div>} />
      <Route path={APP_PATH.TV_SHOWS} render={() => <TVShows />} />

      <Redirect from={APP_PATH.ROOT} to={APP_PATH.TV_SHOWS} />

      <Route
        path={APP_PATH.WILDCARD}
        render={useCallback(
          () => (
            <Redirect to={APP_PATH.TV_SHOWS} />
          ),
          []
        )}
      />
    </Switch>
  );
};
