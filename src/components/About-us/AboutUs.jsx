// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/aboutUs_img.png";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About Us</h2>
              <br />
              <p>
                Our ‘Cradle to Career’ approach focuses on transforming lives
                where we walk alongside an individual on the entire journey –
                through childhood education and care towards skill training and
                livelihood as an adult. We work with government schools
                nationwide and strive for holistic development by harnessing the
                power of teachers, technology, training, and extracurricular
                activities
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
