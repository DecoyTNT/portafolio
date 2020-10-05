import React from 'react';
import Layout from '../components/layout';
import useProyectos from './../hooks/useProyectos';
import Proyecto from './../components/proyecto';

const Portafolio = () => {

    const proyectos = useProyectos();

    return (
        <Layout>
            <main className="contenedor-principal">
                <h1>Portafolio</h1>
                <div className="portafolio">
                    {proyectos.map(proyecto => (
                        <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export default Portafolio;