import { Link, Route, Routes } from 'react-router-dom';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import Rockets from './Rockets/rockets';
import Missions from './Missions/missions';
import planet from '../assets/icons/planet.png';

const Header = () => (
  <>
    <Navbar className="justify-content-between  align-items-center border-bottom navPadding" sticky="top" bg="white">
      <Container bsPrefix="row" className="align-items-center">
        <img src={planet} alt="page icon" className="pageIcon" />
        <h1>Space Travelers&apos;s Hub</h1>
      </Container>
      <Container bsPrefix="row">
        <Nav.Item>
          <Nav.Link href="/home"><Link to="/">Rockets</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><Link to="/Missions">Missions</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><Link to="/MyProfile">My Profile</Link></Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<Missions />} />
    </Routes>
  </>
);

export default Header;
