import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';

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
          <Home />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
