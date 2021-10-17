import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';



import detail1 from '../assets/phone.png';
import detail2 from '../assets/coding.png';
import detail3 from '../assets/baby.png';

class DetailsSection extends Component {
  render() {
    return (
      <section className="detail-section">
        <Container className="section-container" fluid>

          <Row className="detail-row">
            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container">

                <h2>Fully Responsive Design</h2>
                <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
              </div>

            </Col>
            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container img" style={{backgroundImage: `url(${detail1})`}}>


              </div>
            </Col>




            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container img" style={{backgroundImage: `url(${detail2})`}}>


              </div>
            </Col>
            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container">

                <h2>Updated For Bootstrap 4</h2>
                <p>Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
              </div>
            </Col>






            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container">

                <h2>Easy to Use & Customize</h2>
                <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
              </div>

            </Col>
            <Col style={{paddingLeft: "0", paddingRight:"0"}} md={6}>
              <div className="detail-container img" style={{backgroundImage: `url(${detail3})`}}>


              </div>
            </Col>



            </Row>

          </Container>
      </section>
    )
  }
}

export default DetailsSection
