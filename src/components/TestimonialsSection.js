import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';


import tes1 from '../assets/picture1.jpg';
import tes2 from '../assets/picture2.jpg';
import tes3 from '../assets/picture3.jpg';



class TestimonialsSection extends Component {
  render() {
    return (
      <section className="testimonials">
        <Container className="testimonials-container">
          <h2 className="title">What people are saying...</h2>
            <Row className="test-row">
              <Col md={4}>
                <div className="testimonial-item-container">
                  <img className="tes-image" src={tes1}></img>
                  <h5>Margeret E.</h5>
                  <p>"This is fantastic! Thanks so much guys!"</p>
                </div>

              </Col>
              <Col md={4}>
                <div className="testimonial-item-container">
                  <img className="tes-image" src={tes2}></img>
                  <h5>Fred S.</h5>
                  <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>

              </Col>
              <Col md={4}>
                <div className="testimonial-item-container">
                  <img className="tes-image" src={tes3}></img>
                  <h5>Sarah W.</h5>
                  <p>"Thanks so much for making these free resources available to us!"</p>
                </div>

              </Col>




            </Row>



        </Container>

      </section>
    )
  }
}

export default TestimonialsSection
