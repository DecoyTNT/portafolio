import React from 'react'
import Layout from './layout';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image'

export const query = graphql`
    query($slug: String!){
        allStrapiProyectos(filter: {slug: {eq: $slug}}) {
          nodes {
            nombre
            url
            descripcion
            imagen {
              sharp: childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
`;

const Proyectos = ({ data: { allStrapiProyectos: { nodes } } }) => {
    // console.log(nodes[0]);
    const { nombre, imagen, descripcion, url } = nodes[0];
    return (
        <Layout>
            <main className="contenedor-principal">
                <div className="portafolio">
                    <div className="proyecto">
                        <h1>{nombre}</h1>
                        <Image
                            className="imagen"
                            fluid={imagen.sharp.fluid}
                        />
                        <div className="descripcion">
                            <span>{descripcion}</span>
                        </div>
                        <div className="contenedor-boton-ver">
                            <a href={url}>
                                <button className="boton-ver">
                                    Visitar Proyecto
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Link to="/portafolio">
                    <button className="boton-conocer">
                        Ver Portafolio
                        </button>
                </Link>
            </main>
        </Layout>
    );
}

export default Proyectos;