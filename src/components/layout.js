import React from "react"
import { Helmet } from 'react-helmet';
import Header from "./header"
import "./layout.css"
import Footer from './footer';

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <html lang="es"></html>
        <title>JM Desarrollador Web</title>
        <meta name="description" content="Sitio Web de Jorge Cristian Madera López" />
        <script src="https://kit.fontawesome.com/0e38ddcddb.js" crossorigin="anonymous"></script>
      </Helmet>
      <div className="principal">
        <Header />
        <div className="contenido">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
