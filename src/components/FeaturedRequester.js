import React from 'react';
import { Col } from "react-bootstrap";

function FeaturedRequester(props) {

    return(
        <Col lg={4} md={4} sm={12} xs={12} style={{ margin: "20px 0px" }}>
            <img src={ `https://picsum.photos/200/300?random=${props.random}` } alt="" width="100%" height="200px" />
            <h4 className="mt-3">{props.name}</h4>
            <p>{props.description}</p>
        </Col> 
    ); 

}

export default FeaturedRequester;