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
        <section className="section-slide">
            <div className="wrap-slick1">
                <div className="slick1">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <div className="item-slick1" style={{ backgroundImage: `url(${ImageSlide01})` }}>
                <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                        <div className="layer-slick1" >
                            <span className="ltext-101 cl3 respon2">
                                <img src={LogoRaf} />
                                El mejor sabor
                            </span>
                        </div>
                            
                        <div className="layer-slick1" >
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                 para tu pan
                            </h2>
                        </div>
                            
                        <div className="layer-slick1 ">
                            <a href="saborizantes.html" className="flex-c-m stext-101 cl0 size-101 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                                Detalles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="item-slick2" style={{ backgroundImage: `url(${ImageSlide02})` }}>
                <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                        <div className="layer-slick2 ">
                            <span className="ltext-101 cl3 respon2">
                                <img src="img/logo_raf.png" />
                                El toque perfecto para
                            </span>
                        </div>
                            
                        <div className="layer-slick2">
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                tu decoración
                            </h2>
                        </div>
                            
                        <div className="layer-slick2">
                            <a href="decoracion.html" className="flex-c-m stext-101 cl0 size-101 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                                Detalles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="item-slick1" style={{ backgroundImage: `url(${ImageSlide03})` }} />
                    </Carousel.Item>
                    </Carousel>
                </div>
            </ div>
        <section />
  )
    {/* <div className="wrap-slick1">
        <div className="slick1">




            
        </div>
    </div> */}
</section>

    )
}

export default Jumbotron;