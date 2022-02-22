import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/Private/PrivateRoute';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Header />
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
