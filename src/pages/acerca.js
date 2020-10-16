import React from 'react';
import ImagenSasgi from '../components/imagenSasgi';
import Layout from '../components/layout';
import useResidencia from './../hooks/useResidencia';

const Acerca = () => {

    const imagenes = useResidencia();
    // console.log(imagenes);

    return (
        <Layout>
            <main className="contenedor-principal">
                <div className="contenedor-acerca">
                    <h1>Bienvenidos</h1>
                    <h2>Mi nombre es Jorge Cristian Madera López, soy ingeniero en sistemas computacionales</h2>
                    <p>Soy desarrollador web, cuento con conocimientos en Javascript, ReactJS, NodeJS</p>
                </div>

                <hr className="linea-recta" />

                <div className="contenedor-acerca">
                    <h2>Experiencia</h2>
                    <p>Desarrolle el backend de un sistema de auditorías para mi universidad, el cual actualmente se encuentra en uso, este proyecto tomo un año desarrollarlo, ya que se empezó sacando todos los requisitos, después se seleccionaron las tecnologías a usar, las cuales fueron en la parte de frontend Angular, en el backend NodeJS y como base de datos MongoDB</p>
                    <p>Imagenes del sistema</p>
                    <div className="imagenes-sasgi">
                        {imagenes.map(imagen => (
                            <ImagenSasgi
                                imagen={imagen}
                                key={imagen.id}
                            />
                        ))}
                    </div>
                    <a href="https://github.com/DecoyTNT/pruebas-auditorias">
                        <button className="boton-ver">
                            Ver código
                        </button>
                    </a>
                </div>

                <hr className="linea-recta" />

                <div className="contenedor-contacto">
                    <h2>Contacto</h2>
                    <div className="contacto-enlaces">
                        <div className="contacto-enlace">
                            <i className="fab fa-linkedin-in"></i>
                            <a href="https://www.linkedin.com/in/jorge-madera/">linkedin.com/in/jorge-madera</a>
                        </div>
                        <div className="contacto-enlace">
                            <i className="fas fa-at"></i>
                            <span>iscjorgemadera@gmail.com</span>
                        </div>
                        <div className="contacto-enlace">
                            <i className="fab fa-whatsapp"></i>
                            <a href="whatsapp://send?phone=+52 (1) 493 959 7678">+52 (1) 4939597678</a>
                            {/* <span>+52 (1) 4939597678</span> */}
                        </div>
                        <div className="contacto-enlace">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/DecoyTNT">github.com/DecoyTNT</a>
                        </div>
                    </div>
                </div>

                <hr className="linea-recta" />

                <h2>Habilidades</h2>

                <div className="contenedor-habilidades">

                    <div className="habilidades">
                        <p>Logica de programación</p>
                        <span className="barra-habilidad">
                            <span className="barra-90"></span>
                        </span>
                        <p>Trabajo en equipo</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>Autodidacta</p>
                        <span className="barra-habilidad">
                            <span className="barra-90"></span>
                        </span>
                        <p>Proactivo</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>Ingles</p>
                        <span className="barra-habilidad">
                            <span className="barra-30"></span>
                        </span>
                    </div>
                </div>

                <hr className="linea-recta" />

                <h2>Tecnologías</h2>

                <div className="contenedor-habilidades">

                    <div className="habilidades">
                        <h2>Lenguajes de programación y gestores de BD</h2>
                        <p>Java</p>
                        <span className="barra-habilidad">
                            <span className="barra-70"></span>
                        </span>
                        <p>Javascript</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>PHP</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                        <p>Dart</p>
                        <span className="barra-habilidad">
                            <span className="barra-70"></span>
                        </span>
                        {/* </div>

                    <div className="habilidades"> */}

                        <p>MySQL</p>
                        <span className="barra-habilidad">
                            <span className="barra-70"></span>
                        </span>
                        <p>MongoDB</p>
                        <span className="barra-habilidad">
                            <span className="barra-70"></span>
                        </span>
                    </div>

                    <div className="habilidades">

                        <h2>Frameworks, librerías, entornos de ejecución</h2>

                        <p>ReactJS</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>NextJS</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                        <p>GatsbyJS</p>
                        <span className="barra-habilidad">
                            <span className="barra-70"></span>
                        </span>
                        <p>React Native</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                        <p>NodeJS</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>ExpressJS</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>Graphql</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                        <p>Mongoose</p>
                        <span className="barra-habilidad">
                            <span className="barra-80"></span>
                        </span>
                        <p>Sequelize</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                        <p>Flutter</p>
                        <span className="barra-habilidad">
                            <span className="barra-60"></span>
                        </span>
                    </div>

                </div>
            </main>
        </Layout>
    );
}

export default Acerca;