/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import SearchIcon from "../../assets/images/search.svg";
import heroImg from "../../assets/images/hero-img1.png";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h1 className="mb-4">
                Bringing{" "}
                <span className="e-purple">
                  hope,
                  <br />
                </span>{" "}
                Changing{" "}
                <span className="e-purple">
                  lives.
                  <br />
                </span>
                {/*If you want to   <span className='e-purple'>shine<br /></span> like a sun, first <span className='e-purple'>burn<br /></span> like a sun.<br />*/}
              </h1>
              <p className="mb-4">
                The best place to learn programming with beginner friendly
                technologies.
              </p>

              <div className="search">
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder="What do you want to learn" />
                <button className="btn-search">SEARCH COURSES</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
