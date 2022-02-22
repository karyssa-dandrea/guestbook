import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/Private/PrivateRoute';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Switch>
          <Route path="/login">
            <Header />
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Header />
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
