import React from 'react';
import ImageComponent from './ImageComponent';
import { Container, Row } from "react-bootstrap";
import FeaturedRequester from './FeaturedRequester';

class Home extends React.Component {

    constructor() {
        super();

        this.state= {
            featuredRequesters: [
                {
                    name: "Max Mullins",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    name: "Garth Rodgers",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    name: "Maxwell Woodward",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    name: "Harrison Palmer",
                    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    name: "Albert Wintringham",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                },
                {
                    name: "Mac Morrison",
                    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                },
            ]
        }
    }

    render() {

        const { featuredRequesters } = this.state;

        return(

            <div>
                <ImageComponent />
                <Container>
                    <h1 style={{ textAlign: "center" }}>Featured Requesters</h1>
                    <Row>
                        { 
                            featuredRequesters.map( (featuredRequester, index) => 
                                {
                                    return (
                                        <FeaturedRequester name={featuredRequester.name} description={featuredRequester.description} random={index+2} />
                                    )
                                }
                            ) 
                        } 
                    </Row>
                </Container>
            </div>
            
        ); 

    }

}

export default Home;