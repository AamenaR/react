import React from 'react'
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function HeadingInfo() {
  return (
    <Container fluid className='background-color'>
        <Container>
        <Row>
            <Col className='text-start'>
            <div class="heading-info">
                    <h1 className='fw-bolder'>Find your next stay</h1>
                    <p>Search deals on hotels, homes, and much more...</p>
            </div>
            </Col>
        </Row>
        </Container>
        
    </Container>
   
  )
}

export default HeadingInfo
