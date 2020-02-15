import * as React from 'react'
import { Router } from '@reach/router'
import Root from '../routes/Root'

const App: React.FC = () => {
  return (
    <Router>
      <Root path='/' />
    </Router>
  );
}

export default App;
