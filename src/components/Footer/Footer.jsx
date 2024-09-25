import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

import logo from "../../assets/images/Header-logo.jpg";

const footerQuickLinks = [
  {
    display: "Blog",
    url: "https://hopefoundation.org.in/our-focus/",
  },
  {
    display: "Documents",
    url: "https://hopefoundation.org.in/annual-report/",
  },
];

const footerComLinks = [
  {
    display: "Donate Now",
    url: "https://portal.getepay.in:8443/getepayPortal/paymentForm/HOPE",
  },
  {
    display: "Privacy Statement",
    url: "https://hopefoundation.org.in/privacy-statement/",
  },
];

const footerInfoLinks = [
  {
    display: "About Us",
    url: "https://hopefoundation.org.in/about-us/",
  },
  {
    display: "Contact us",
    url: "mailto:augustine@hopeww.in",
  },
];

const footerCourseskLinks = [
  {
    display: "Python",
    url: "https://youtu.be/O0C2OiNNH4k?si=ContYlcrIHXm-WKy",
  },
  {
    display: "Tally",
    url: "https://www.youtube.com/watch?v=Sw2H56aMe-g&ab_channel=VedantaEducationalAcademy",
  },
  {
    display: "AWS",
    url: "https://www.youtube.com/watch?v=kvP_7jT-ImY&list=PLt1SIbA8guuvfvUDVLpJepmbnYpOfYCIB&ab_channel=StephaneMaarek",
  },
  {
    display: "Speed Typing",
    url: "https://www.youtube.com/watch?v=tuWFNrfjy-c&list=PLl7bxsSiKuDbZgHkP6LgEfILKv0qEQsjW&ab_channel=interDidactica",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Courses</h6>
            <ListGroup className="link_list">
              {footerCourseskLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Explore</h6>
            <ListGroup className="link_list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Community</h6>
            <ListGroup className="link_list">
              {footerComLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Hope Foundation</h6>
            <ListGroup className="link_list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="12" className="">
            <div className="d-flex align-items-center justify-content-center gap-2 p-4 logo">
              <img
                style={{ width: "25%", height: "20%", paddingTop: "7px" }}
                src={logo}
                alt=""
              />
            </div>

            <div className="follows">
              <p className="mb-0 d-flex align-items-center justify-content-center gap-2 text-white">
                © Hope Foundation. All rights reserved.
              </p>

              <div className="d-flex align-items-center justify-content-center gap-2 links_socials">
                <span>
                  {" "}
                  <a href="https://www.facebook.com/hope.foundation.india">
                    <i className="ri-facebook-fill text-white"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://x.com/HOPEFou75031954">
                    <i className="ri-twitter-fill text-white"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.instagram.com/hopefoundation1991/?hl=en">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.linkedin.com/company/hopefoundationindia1991/?viewAsMember=true&original_referer=http%3A%2F%2Flocalhost%2F">
                    <i className="ri-linkedin-fill text-white"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
