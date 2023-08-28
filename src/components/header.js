import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets/rockets';
import Missions from './Missions/missions';

const Header = () => (
  <>
    <header>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions">Missions</Link>
        </li>
      </ul>
    </header>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
    </Routes>
  </>
);

export default Header;
