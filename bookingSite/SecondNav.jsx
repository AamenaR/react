import React from 'react';
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Routes,Route,Link } from 'react-router-dom';
import Stay from './NavRoutes/Stay';
import Flights from './NavRoutes/Flights';
import FlightHotel from './NavRoutes/FlightHotel';
import CarRental from './NavRoutes/CarRental';
import Attrations from './NavRoutes/Attrations';
import AirportTaxi from './NavRoutes/AirportTaxi';

function SecondNav() {
  return (
    <Container fluid className='background-color'>
        <Container>
        <Row>
            <Col className='background-color'>
            <ul className=' ul-hover'>  
            <Link to="/stay"><li className='Home-link'>stays</li></Link>
            <Link to="/flight"><li>flights</li></Link>
            <Link to="/flightsHotel"><li>flight + hotel</li></Link>
            <Link to="/carRental"><li>car rentals</li></Link>
            <Link to="/attrations"><li>Attractions</li></Link>
            <Link to="/airportTaxis"><li>Airport taxis</li></Link>
            </ul>
            <Routes>
                <Route path='/stay' element={<Stay/>}></Route>
                <Route path='/flight' element={<Flights/>}></Route>
                <Route path='/flightsHotel' element={<FlightHotel/>}></Route>
                <Route path='/carRental' element={<CarRental/>}></Route>
                <Route path='/attrations' element={<Attrations/>}></Route>
                <Route path='/airportTaxis' element={<AirportTaxi/>}></Route>
            </Routes>
            </Col>
        </Row>
        </Container>
       
    </Container>
  )
}

export default SecondNav;
