import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets/rockets';
import Missions from './components/Missions/missions';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/Missions">Missions</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
