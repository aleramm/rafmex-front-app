import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ImageSlide01 from '../../assets/img/slide-01.jpg';
import ImageSlide02 from '../../assets/img/slide-02.jpg';
import ImageSlide03 from '../../assets/img/slide-03.jpg';
import LogoRaf from '../../assets/img/logo_raf.png';

const Jumbotron: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageSlide01} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageSlide02} alt="First slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageSlide03} alt="First slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Jumbotron;