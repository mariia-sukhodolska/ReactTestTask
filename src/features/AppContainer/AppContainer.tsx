import React, { FC } from 'react';

import { UnauthorizedRoutes } from '../../routes/UnauthorizedRoutes/UnauthorizedRoutes';
import { UserRoutes } from '../../routes/UserRoutes/UserRoutes';

export const AppContainer: FC = () => {
  const hasUser = true;

  // There can be implemented logic with redirects, dynamic imports, adding theme provider, create context
  return <> {hasUser ? <UserRoutes /> : <UnauthorizedRoutes />} </>;
};
