import React from 'react';
import Image from 'gatsby-image';

const ImagenSasgi = ({ imagen }) => {

    const abrirModal = () => {
        if (window.screen.width >= 768) {
            document.getElementById(imagen.id + '-g').style.display = 'block'
        } else {
            document.getElementById(imagen.id).style.display = 'block'
        }
    }

    const cerrarModal = () => {
        document.getElementById(imagen.id).style.display = 'none'
        document.getElementById(imagen.id + '-g').style.display = 'none'
    }
    return (
        <>
            <div
                onClick={abrirModal}
            >
                <Image
                    className="imagen-sasgi-s"
                    fluid={imagen.imagen.sharp.fluid}
                />
            </div>
            <div className="modal" id={imagen.id}>
                <Image
                    className="imagen-modal"
                    fixed={imagen.imagen.sharp.fixed}
                />
                <button onClick={cerrarModal} className="cerrar">X</button>
            </div>
            <div className="modal" id={`${imagen.id}-g`}>
                <Image
                    className="imagen-modal"
                    fixed={imagen.imagen.sharp.gfixed}
                />
                <button onClick={cerrarModal} className="cerrar">X</button>
            </div>
        </>
    );
}

export default ImagenSasgi;