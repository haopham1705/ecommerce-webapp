import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

export default function ProductFeature() {
  const math = useRouteMatch()

  return (
    <Box pt={4}>
      <Switch>
        <Route path={math.url} component={ListPage} exact />
        <Route path={`${math.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
    )
}
