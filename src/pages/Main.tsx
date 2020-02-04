import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Logo from '../assets/img/icons/logo.png';
import ImageSlide01 from './../assets/img/slide-01.jpg';
import ImageSlide02 from './../assets/img/slide-02.jpg';
import ImageSlide03 from './../assets/img/slide-03.jpg';
import LogoRaf from './../assets/img/logo_raf.png';
import ImageBanner01 from './../assets/img/banner-01.jpg';
import ImageBanner02 from './../assets/img/banner-02.jpg';
import ImageBanner03 from './../assets/img/banner-03.jpg';

const Main: React.FC = () => {
  return (
    <div>
    <div className="container-menu-desktop">
    <div className="top-bar">
    <div className="content-topbar flex-sb-m h-full container">
					<div className="left-top-bar">
					</div>
					<div className="right-top-bar flex-w h-full">
						<a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
							<i className="fa fa-facebook"></i>
						</a>
						<a href="https://www.instagram.com/rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
							<i className="fa fa-instagram"></i>
						</a>
					</div>
				</div>
    </div>
    <div className="wrap-menu-desktop">
      <nav className="limiter-menu-desktop container">
        <a href="index" className="logo">
          <img src={Logo} alt="IMG-LOGO" />
        </a>
        <div className="menu-desktop">
          <ul className="main-menu">
            <li className="active-menu">
              <a href="index">Inicio</a>
            </li>
            <li>
              <a href="nosotros">Nosotros</a>
            </li>
            <li>
              <a href="productos">Productos</a>
            </li>
            <li>
              <a href="distribuidores">Distribuidores</a>
            </li>
            <li>
              <a href="novedades">Novedades</a>
            </li>
            <li>
              <a href="contacto">Contacto</a>
            </li>
          </ul>
        </div>	
      </nav>
    </div>	
  </div>
    {/* 
    
    
    <section className="section-slide">
        <div className="wrap-slick1">
            <div className="slick1">
                <div className="item-slick1" style={{backgroundImage: `url(${ImageSlide01})`}}>
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
                                <a href="saborizantes" className="flex-c-m stext-101 cl0 size-101 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                                    Detalles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-slick1" style={{backgroundImage: `url(${ImageSlide02})`}}>
                    <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div className="layer-slick1 ">
                                <span className="ltext-101 cl3 respon2">
                                    <img src={LogoRaf} />
                                    El toque perfecto para
                                </span>
                            </div>
                                
                            <div className="layer-slick1">
                                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                    tu decoración
                                </h2>
                            </div>
                                
                            <div className="layer-slick1">
                                <a href="decoracion" className="flex-c-m stext-101 cl0 size-101 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                                    Detalles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-slick1" style={{backgroundImage: `url(${ImageSlide03})`}}>
                    <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div className="layer-slick1  ">
                                <span className="ltext-101 cl3 respon2">
                                    <img src={LogoRaf} />
                                    Moldes y Charolas
                                </span>
                            </div>
                                
                            <div className="layer-slick1">
                                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                    para tus creaciones
                                </h2>
                            </div>
                                
                            <div className="layer-slick1">
                                <a href="moldes" className="flex-c-m stext-101 cl0 size-101 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                                    Detalles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <div className="block1 wrap-pic-w">
                        <img src={ImageBanner01} alt="IMG-BANNER" />

                        <a href="saborizantes" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div className="block1-txt-child1 flex-col-l">
                                <span className="block1-name ltext-102 trans-04 p-b-8">
                                    Saborizantes
                                </span>

                            </div>

                            <div className="block1-txt-child2 p-b-4 trans-05">
                                <div className="block1-link stext-101 cl0 trans-09">
                                    Detalles
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <div className="block1 wrap-pic-w">
                        <img src={ImageBanner02} alt="IMG-BANNER" />

                        <a href="colorantes" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div className="block1-txt-child1 flex-col-l">
                                <span className="block1-name ltext-102 trans-04 p-b-8">
                                    Colorantes
                                </span>


                            </div>

                            <div className="block1-txt-child2 p-b-4 trans-05">
                                <div className="block1-link stext-101 cl0 trans-09">
                                    Detalles
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <div className="block1 wrap-pic-w">
                        <img src={ImageBanner03} alt="IMG-BANNER" />

                        <a href="materiasprimas" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div className="block1-txt-child1 flex-col-l">
                                <span className="block1-name ltext-102 trans-04 p-b-8">
                                    Materias Primas
                                </span>

                            </div>

                            <div className="block1-txt-child2 p-b-4 trans-05">
                                <div className="block1-link stext-101 cl0 trans-09">
                                    Detalles
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            <div className="flex-c-m flex-w w-full p-t-45">
                <a href="productos" className="flex-c-m stext-101 cl5 size-103 blue_b bor1 hov-btn1 p-lr-15 trans-04">
                    NUESTROS PRODUCTOS
                </a>
            </div>


            </div>
        </div>
    </div>
    
    <footer className="bg1 p-t-75 p-b-32">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Productos
                    </h4>

                    <ul>
                        <li className="p-b-10">
                            <a href="saborizantes" className="stext-107 cl7 hov-cl1 trans-04">
                                Saborizantes
                            </a>
                        </li>
                        <li className="p-b-10">
                            <a href="colorantes" className="stext-107 cl7 hov-cl1 trans-04">
                                Colorantes
                            </a>
                        </li>

                        <li className="p-b-10">
                            <a href="materiasprimas" className="stext-107 cl7 hov-cl1 trans-04">
                                Materias Primas
                            </a>
                        </li>

                        <li className="p-b-10">
                            <a href="moldes" className="stext-107 cl7 hov-cl1 trans-04">
                                Moldes
                            </a>
                        </li>
                        <li className="p-b-10">
                            <a href="charolas" className="stext-107 cl7 hov-cl1 trans-04">
                                Charolas
                            </a>
                        </li>
                        <li className="p-b-10">
                            <a href="utensilios" className="stext-107 cl7 hov-cl1 trans-04">
                                Utensilios
                            </a>
                        </li>
                        <li className="p-b-10">
                            <a href="decoracion" className="stext-107 cl7 hov-cl1 trans-04">
                                Decoración
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Acerca
                    </h4>

                    <ul>
                        <li className="p-b-10">
                            <a href="nosotros" className="stext-107 cl7 hov-cl1 trans-04">
                                Nosotros
                            </a>
                        </li>

                        <li className="p-b-10">
                            <a href="distribuidores" className="stext-107 cl7 hov-cl1 trans-04">
                                Distribuidores 
                            </a>
                        </li>

                        <li className="p-b-10">
                            <a href="novedades" className="stext-107 cl7 hov-cl1 trans-04">
                                Novedades
                            </a>
                        </li>

                        <li className="p-b-10">
                            <a href="contacto" className="stext-107 cl7 hov-cl1 trans-04">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        CONTACTO
                    </h4>

                    <p className="stext-107 cl7 size-201">
                        TEL. (55) 5341 6767  o  01 800 234 6767
                    </p>

                </div>

                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Redes Sociales
                    </h4>
                    <div>
                        <a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/rafmex1942/" target="_blank" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div>


                <p className="stext-107 cl6 txt-center">
                    RAFMEX S.A. DE C.V.<br/>
                    <a href="http://rafmex.com.mx/assets/aviso.pdf" target="_blank">Aviso de Privacidad</a>
                </p>

            </div>
        </div>
    </footer>
   
    <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
            <i className="zmdi zmdi-chevron-up"></i>
        </span>
    </div>
</div >




  //   <div className="container-menu-desktop">
  //   <div className="top-bar">
  //   <div className="content-topbar flex-sb-m h-full container">
	// 				<div className="left-top-bar">
	// 				</div>
	// 				<div className="right-top-bar flex-w h-full">
	// 					<a href="https://www.facebook.com/Rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
	// 						<i className="fa fa-facebook"></i>
	// 					</a>
	// 					<a href="https://www.instagram.com/rafmex1942/" target="_blank" className="flex-c-m trans-04 p-lr-25">
	// 						<i className="fa fa-instagram"></i>
	// 					</a>
	// 				</div>
	// 			</div>
  //   </div>
  //   <div className="wrap-menu-desktop">
  //     <nav className="limiter-menu-desktop container">
  //       <a href="index" className="logo">
  //         <img src={Logo} alt="IMG-LOGO" />
  //       </a>
  //       <div className="menu-desktop">
  //         <ul className="main-menu">
  //           <li className="active-menu">
  //             <a href="index">Inicio</a>
  //           </li>
  //           <li>
  //             <a href="nosotros">Nosotros</a>
  //           </li>
  //           <li>
  //             <a href="productos">Productos</a>
  //           </li>
  //           <li>
  //             <a href="distribuidores">Distribuidores</a>
  //           </li>
  //           <li>
  //             <a href="novedades">Novedades</a>
  //           </li>
  //           <li>
  //             <a href="contacto">Contacto</a>
  //           </li>
  //         </ul>
  //       </div>	
  //     </nav>
  //   </div>	
  //   <Jumbotron />
  //   {/* <Banner /> */}
  // </div>
  );
};

export default Main;
