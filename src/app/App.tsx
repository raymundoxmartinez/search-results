import * as React from 'react'
import { Router, Redirect } from '@reach/router'
import SearchResults from '../routes/SearchResults'
import Layout from '../components/Layout'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Router>
          <SearchResults path="/search-results" render={() => <Redirect to="/" />} />
        </Router>
      </Layout>
    </ThemeProvider >

  );
}

export default App;
