import React from "react"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import useProyectos from './../hooks/useProyectos';
import { Link } from 'gatsby';

const IndexPage = () => {

  const proyectos = useProyectos();

  return (
    <Layout>
      <main className="contenedor-principal">
        <div className="contenedor-acerca">
          <h1>Bienvenidos</h1>
          <p className="descripcion">Mi nombre es Jorge Madera y soy Ingeniero en Sistemas Computacionales, con especialidad en desarrollo web</p>
          <Link to="/acerca">
            <button className="boton-conocer">
              Conocer más
            </button>
          </Link>
        </div>

        <hr className="linea-recta" />

        <div className="contenedor-portafolio">
          <h1>Portafolio</h1>
          <div className="proyecto">
            <Image
              className="imagen"
              fluid={proyectos[5].imagen.sharp.fluid}
            />
            <h3>{proyectos[5].nombre}</h3>
            <span>{proyectos[5].descripcion}</span>
            <div className="contenedor-boton-ver">
              <Link to={`/portafolio/${proyectos[5].slug}`}>
                <button className="boton-ver">
                  Ver
                </button>
              </Link>
            </div>
          </div>
          <Link to="/portafolio">
            <button className="boton-conocer">
              Ver Portafolio
            </button>
          </Link>
        </div>

        <hr className="linea-recta" />

        <div className="contenedor-contacto">
          <h1>Contacto</h1>
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
            </div>
            <div className="contacto-enlace">
              <i className="fab fa-github"></i>
              <a href="https://github.com/DecoyTNT">github.com/DecoyTNT</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
