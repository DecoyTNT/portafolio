import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby';

const Proyecto = ({ proyecto }) => {

    return (
        <div className="portafolio-proyecto">
            <Image
                className="imagen"
                fluid={proyecto.imagen.sharp.fluid}
            />
            <h3>{proyecto.nombre}</h3>
            <Link
                to={proyecto.slug}
            >
                <button className="boton-ver">
                    Ver
                </button>
            </Link>
        </div>
    );
}

export default Proyecto;