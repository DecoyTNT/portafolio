import { graphql, useStaticQuery } from 'gatsby';

const useResidencia = () => {

    const datos = useStaticQuery(graphql`
        query {
                allStrapiResidencias(sort: {fields: id}) {
                    nodes {
                        id
                        imagen {
                            sharp: childImageSharp {
                                fluid(maxWidth: 1920, maxHeight: 1080, webpQuality: 10) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                                gfixed: fixed(width: 900) {
                                    ...GatsbyImageSharpFixed
                                }
                                fixed {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
    `);

    // console.log(datos);

    return datos.allStrapiResidencias.nodes;
}

export default useResidencia;