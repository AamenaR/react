import React from 'react'
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

function BookingNav() { // main nav of website compo
  return (
    <Container fluid className='background-color'>
            <Container className='d-flex align-items-center'>
      <div className='booking-row'> 
              <h1 className="logo">Booking.com</h1>
              <ul>
                    <li><a href="#">INR</a></li>
                    <li><a href="#"><img src="https://t-cf.bstatic.com/design-assets/assets/v3.94.0/images-flags/In@3x.png" alt="" /></a></li>
                    <li><a href="#"><i class="fa-solid fa-question circle"></i></a></li>
                    <li><a href="#">List your property</a></li>
                    <button>Register</button>
                    <button>Sign in</button>
                </ul>
              </div>
            </Container>
    </Container>
  )
}
export default BookingNav;
