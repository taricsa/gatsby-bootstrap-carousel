import React from "react"

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg01 from "../images/background-01.png"
import bg02 from "../images/background-02.png"
import bg03 from "../images/background-03.png"
import bg04 from "../images/background-04.png"
import { Container } from "react-bootstrap";


const Btcarousel = () => (
  <Container >
      <Carousel
        showArrows="true"
        controls="true"
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
        >
                <Carousel.Item>
                  <img className="d-block w-70" src={bg01} alt="Portfolio" />
                  <Carousel.Caption>
                    <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Clients</h3>
                    <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Manage all your investments.</p>  
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={bg02}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Assets</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Follow the performance of your asset.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={bg03}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      CRM Leads</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Search for your advisor, globally.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={bg04}
                    alt="Fourth slide"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      CRM Process</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> All the information you can you need about the advisor.</p>    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-70"
                    src={bg04}
                    alt="Fitht slide"
                  />
                  <Carousel.Caption>
                  <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
                      Private Chat</h3>
                  <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> All the information you can you need about the advisor.</p>
                  </Carousel.Caption>
                </Carousel.Item>
      </Carousel>
  </Container>
)

export default Btcarousel

// <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Manage all your investments.</p>
// <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Follow the performance of your asset.</p>
// <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Search for your advisor, globally.</p>
// <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> All the information you can you need about the advisor.</p>
// <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Chat with different advisors to find yours.</p>
