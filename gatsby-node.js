exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiProyectos {
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    const proyectos = resultado.data.allStrapiProyectos.nodes;

    proyectos.forEach(proyecto => {
        actions.createPage({
            path: `portafolio/${proyecto.slug}`,
            component: require.resolve('./src/components/proyectos.js'),
            context: {
                slug: proyecto.slug
            }
        })
    });
}