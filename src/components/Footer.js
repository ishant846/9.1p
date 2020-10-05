import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

    return (
        <footer style={{ backgroundColor: "lightgray" }}>
            <Row className="m-0">
                <Col lg={9} md={12} sm={12} xs={12}>
                    <Row className="m-0" style={{ display: "flex", alignItems: "center" }}>
                        <Col lg={3} md={4} sm={12} xs={12} className="p-0">
                            <h4><b>NEWSLETTER SIGN</b></h4>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <input type="email" placeholder="Enter your email" style={{ width: "100%", margin: "5px" }} />
                        </Col>
                        <Col lg={3} md={2} sm={12} xs={12}>
                            <Button variant="secondary" style={{ width: "100%", margin: "5px" }}>Subscribe</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={12} sm={12} xs={12} style={{ display: "flex", alignItems: "center" }}>
                    <h4><b>CONNECT US</b></h4>
                    <FontAwesomeIcon icon={faFacebookSquare} size="lg" style={{ margin: "0px 5px 0px 30px" }} />
                    <FontAwesomeIcon icon={faInstagramSquare} size="lg" style={{ margin: "0px 5px" }} />
                    <FontAwesomeIcon icon={faTwitterSquare} size="lg" style={{ margin: "0px 5px" }} />
                </Col>
            </Row>
        </footer>
    );

}

export default Footer;