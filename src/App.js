import './App.css';
import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
