import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* const {setUser} = useUser(); */}
      <Header />
      <Home />
      <Layout />
    </div>
  );
}

export default App;
