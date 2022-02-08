import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* const {setUser} = useUser(); */}
      <Home />
      <Layout />
    </div>
  );
}

export default App;
