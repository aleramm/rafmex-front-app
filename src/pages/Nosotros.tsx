import React from 'react';
import About01 from '../assets/img/about-01.jpg';
import About02 from '../assets/img/about-02.jpg';

const Nosotros: React.FC = (props: any) => {
    return(
        <section className="bg0 p-t-75 p-b-120">
		<div className="container">
			<div className="row p-b-148">
				<div className="col-md-7 col-lg-8">
					<div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
						<h3 className="mtext-111 cl2 p-b-16">
							Misión
						</h3>

						<p className="stext-113 cl6 p-b-26">
							Somos una empresa especializada en el desarrollo, fabricación y comercialización de saborizantes, colorantes y otros ingredientes para la industria alimenticia, específicamente la panificadora, la pastelera y repostera.


						</p>

						<p className="stext-113 cl6 p-b-26">
							Nos distinguimos por la innovación y excelencia en cada uno de nuestros procesos, complementando nuestra línea con accesorios de alta calidad.

							<br/><br/>
							Satisfacemos la necesidad del profesional y agregamos valor adicional a su producto final.
						</p>

						<h3 className="mtext-111 cl2 p-b-16">
							Visión
						</h3>

						<p className="stext-113 cl6 p-b-26">
							Ser una empresa altamente reconocida en el mercado por su experiencia, servicio y productos confiables.
						</p>

					</div>
				</div>

				<div className="col-11 col-md-5 col-lg-4 m-lr-auto">
					<div className="how-bor1 ">
						<div className="hov-img0">
							<img src={About01} alt="IMG" />
						</div>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="order-md-2 col-md-7 col-lg-8 p-b-30">
					<div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
						<h3 className="mtext-111 cl2 p-b-16">
							Valores
						</h3>

						<div className="stext-113 cl6 p-b-26 about_text">
		
		<h6>Responsabilidad</h6>

         <span> Asumir y ocuparnos en las tareas que nos corresponden.</span>

        <h6>Honestidad</h6>

         <span>Tener consistencia entre la forma de pensar, decir y actuar.</span>

        <h6>Lealtad</h6>

         <span>Comprometernos con la empresa y clientes ante cualquier situación.</span>

        <h6>Respeto</h6>

         <span>Comprender y aceptar que todos somos diferentes en forma de ser y pensar.</span>

        <h6>Innovación</h6>

         <span>Con entusiasmo y creatividad, impulsamos la cultura de la mejora continua para afrontar nuevos retos.</span>
						</div>

						<div className="bor16 p-l-29 p-b-9 m-t-22">
							<p className="stext-114 cl6 p-r-40 p-b-11">
								Somos socios de ANPROPAN y colaboradores de la CANAINPA.
							</p>

							<span className="stext-111 cl8">
								- RAFMEX
							</span>
						</div>
					</div>
				</div>

				<div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
					<div className="how-bor2">
						<div className="hov-img0">
							<img src={About02} alt="IMG" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
    )
};
export default Nosotros;