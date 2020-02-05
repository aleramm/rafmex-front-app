import * as React from "react";
import Logo from '../../assets/img/icons/logo.png';

const HeaderApp: React.FC = () => {
    return (
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
            <div className="wrap-menu-desktop" >
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
    );

};

export default HeaderApp;