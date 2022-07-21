import React from "react";
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
class Home extends React.Component
{
    render()
    {
        return (
            <>
                <section>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="./assets/images/slider-1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="./assets/images/slider-2.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/images/slider-3.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="offset-5 col-lg-4 col-xs-12 col-sm-12 col-md-4 pb-5">
                               <h2 className="display-4"><u>About</u></h2> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12" >
                                <div className="image-box">
                                    <img src="./assets/images/laptop.jpeg" className="img-fluid" alt="pitcure not found"/>
                                </div>
                            </div>
                            <div className="border border-top-0 border-right-0 border-bottom-0 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                                <p>

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <Link to="/about" className="btn btn-success btn-sm">Read More</Link>    
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;