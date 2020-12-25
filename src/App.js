import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Test from './components/page/Test';

function App() {
  return (
    <Switch>
      <Route path="/home" component={ Main } />
      <Route path="/test" component={ Test } />
    </Switch>
  );
}

export default App;
