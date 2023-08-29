import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets/rockets';
import Missions from './Missions/missions';
import MyProfile from './MyProfile/MyProfile';

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
        {}
        <li>
          <Link to="/MyProfile">My Profile</Link>
        </li>
      </ul>
    </header>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      {}
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default Header;
