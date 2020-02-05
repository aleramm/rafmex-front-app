import * as React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="bg1 p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Productos
                            </h4>

                            <ul>
                                <li className="p-b-10">
                                    <a href="saborizantes.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Saborizantes
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="colorantes.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Colorantes
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="materiasprimas.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Materias Primas
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="moldes.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Moldes
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="charolas.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Charolas
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="utensilios.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Utensilios
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="decoracion.html" className="stext-107 cl7 hov-cl1 trans-04">
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
                                    <a href="nosotros.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Nosotros
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="distribuidores.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Distribuidores 
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="novedades.html" className="stext-107 cl7 hov-cl1 trans-04">
                                        Novedades
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="contacto.html" className="stext-107 cl7 hov-cl1 trans-04">
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
        </div>
    );
}

export default Footer;
