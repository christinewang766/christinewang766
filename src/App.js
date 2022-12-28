import Home from './pages';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Aos from 'aos'

function App() {
  Aos.init();

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
