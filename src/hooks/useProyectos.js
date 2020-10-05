import { graphql, useStaticQuery } from 'gatsby';

const useProyectos = () => {

    const datos = useStaticQuery(graphql`
        query {
                allStrapiProyectos(sort: {fields: id}) {
                    nodes {
                            nombre
                            url
                            descripcion
                            id
                            slug
                            imagen {
                                sharp: childImageSharp {
                                    fluid(maxWidth: 1920, maxHeight: 1080, webpQuality: 10) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                }
            }
    `);

    // console.log(datos);

    return datos.allStrapiProyectos.nodes;
}

export default useProyectos;