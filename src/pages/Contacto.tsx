import React from 'react';
import ImageB4 from '../assets/img/bg-04.jpg';

const Contacto: React.FC = () => {
    return (
        <div>
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url({ImageB4})` }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Contacto
                </h2>
            </section>	

	<section className="bg0 p-t-104 p-b-116">
		<div className="container">
			<div className="flex-w flex-tr">
				<div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
					  <form id="formhome" target="_self" name="formhome">
						<h4 className="mtext-105 cl2 txt-center p-b-30">
							Envíanos un Mensaje
						</h4>
						<div className="bor8 m-b-20 how-pos4-parent">
							
							<input type="text" id="nombrehome" name="nombrehome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Nombre" />
						</div>

						<div className="bor8 m-b-20 how-pos4-parent">
							
							<input type="email" id="correohome" name="correohome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Correo" />
						</div>

						<div className="bor8 m-b-20 how-pos4-parent">

							<input type="text" id="telefonohome" name="telefonohome" className="form-control stext-111 cl2 plh3 size-116 p-l-22" placeholder="Teléfono" />
						</div>

						<div className="bor8 m-b-30">

							<textarea id="mensajehome" name="mensajehome" cols={30} rows={7} className="form-control stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" placeholder="Mensaje"></textarea>
						</div>

					    <input id="sendhome" type="submit" value="Enviar Mensaje" className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" />
					</form>
				</div>

				<div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">

					<div className="flex-w w-full p-b-42">
						<h5 className="title_contact">Oficina</h5>
					</div>


					<div className="flex-w w-full p-b-42">
						<span className="fs-18 cl5 txt-center size-211">
							<span className="lnr lnr-phone-handset"></span>
						</span>

						<div className="size-212 p-t-2">
							<span className="mtext-110 cl2">
								Teléfono
							</span>

							<p className="stext-115 cl1 size-213 p-t-18">
								<a href="tel:5553416767">(+52) 55 5341 6767</a>
							</p>
						</div>
					</div>

					<div className="flex-w w-full">
						<span className="fs-18 cl5 txt-center size-211">
							<span className="lnr lnr-envelope"></span>
						</span>

						<div className="size-212 p-t-2">
							<span className="mtext-110 cl2">
								Correo
							</span>

							<p className="stext-115 cl1 size-213 p-t-18">
								<a href="mailto: ventas@rafmex.com"> ventas@rafmex.com</a>
							</p>
						</div>
					</div>

					<br/><br/>

					<hr/>

					<br/>

					<div className="flex-w w-full p-b-42">
						<h5 className="title_contact">Tienda</h5>
					</div>

					<div className="flex-w w-full p-b-42">
						<span className="fs-18 cl5 txt-center size-211">
							<span className="lnr lnr-map-marker"></span>
						</span>

						<div className="size-212 p-t-2">
							<span className="mtext-110 cl2">
								Dirección
							</span>

							<p className="stext-115 cl6 size-213 p-t-18">
								Dr. Liceaga #96, Doctores, Cuauhtémoc, CDMX .06720
							</p>
						</div>
					</div>

					<div className="flex-w w-full p-b-42">
						<span className="fs-18 cl5 txt-center size-211">
							<span className="lnr lnr-phone-handset"></span>
						</span>

						<div className="size-212 p-t-2">
							<span className="mtext-110 cl2">
								Teléfonos
							</span>

							<p className="stext-115 cl1 size-213 p-t-18">
								<a href="tel:5553416767">(+52) 55 5341 6767</a>  y  <a href="tel:55780363">(+52) 5578 0363 </a>
							</p>
						</div>
					</div>

					<div className="flex-w w-full">
						<span className="fs-18 cl5 txt-center size-211">
							<span className="lnr lnr-envelope"></span>
						</span>

						<div className="size-212 p-t-2">
							<span className="mtext-110 cl2">
								Correo
							</span>

							<p className="stext-115 cl1 size-213 p-t-18">
								<a href="mailto:tienda@rafmex.com">tienda@rafmex.com</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
	
	
	<div className="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7838735005885!2d-99.15016058509346!3d19.421741986890382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff286412b7c3%3A0x3c2c9ce5e3077d74!2sRAFMEX%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1576971681042!5m2!1ses-419!2smx" width="100%" height={350} style={{ border:0 }} />
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
						<li className="p-b-10">
							<a href="nuevo_sabor.html" className="stext-107 cl7 hov-cl1 trans-04">
								Nuevo Color Aroma
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
						<br/><br/>
						Dr. Liceaga No. 96, Col. Doctores, C.P.06720, Ciudad de México
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
    )
};
export default Contacto;