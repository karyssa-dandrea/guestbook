import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* const {setUser} = useUser(); */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
