import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


setConfiguration({ maxScreenClass: 'xl' });
class IconsSection extends Component {
  render() {
    return (
      <section className="icons-section">
        <Container className="section-container" fluid>
          <Row className="icon-row">
            <Col md={4}>
              <div className="item-container">
                <div class="icon-img">
                  <FontAwesomeIcon className="icon" icon={faDesktop} />
                </div>
                <h2>Fully Responsive</h2>
                <p>This theme will look great on any device, no matter the size!</p>
              </div>

            </Col>
            <Col md={4}>
              <div className="item-container">
                <div class="icon-img">
                  <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                </div>
                <h2>Bootstrap 4 Ready</h2>
                <p>Featuring the latest build of the new Bootstrap 4 framework!</p>
              </div>

            </Col>

            <Col md={4}>
              <div className="item-container">
                <div class="icon-img">
                  <FontAwesomeIcon className="icon" icon={faCheckCircle} />
                </div>
                <h2>Easy to Use</h2>
                <p>Ready to use with your own content, or customize the source files!</p>
              </div>

            </Col>

            </Row>
          </Container>
      </section>
    )
  }
}

export default IconsSection
