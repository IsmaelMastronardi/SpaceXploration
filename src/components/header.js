import { Link, Route, Routes } from 'react-router-dom';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import Rockets from './Rockets/rockets';
import Missions from './Missions/missions';
import MyProfile from './MyProfile/MyProfile';
import planet from '../assets/icons/planet.png';

const Header = () => (
  <>
    <Navbar className="justify-content-between  align-items-center border-bottom navPadding" sticky="top" bg="white">
      <Container bsPrefix="row" className="align-items-center">
        <img src={planet} alt="page icon" className="pageIcon" />
        <h1>Space Travelers&apos;s Hub</h1>
      </Container>
      <Container bsPrefix="row" className="container-gap">
        <Nav.Item>
          <Link to="/">Rockets</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Missions">Missions</Link>
        </Nav.Item>
        <div className="headerBar" />
        <Nav.Item>
          <Link to="/MyProfile">My Profile</Link>
        </Nav.Item>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default Header;
