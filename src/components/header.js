import React, { useState } from "react"
import { Link } from 'gatsby'

const Header = () => {

  const [menuActivo, setMenuActivo] = useState(false);

  return (
    <header className="header">
      <div className="contenedor-header">
        <Link to="/">
          <h1>JM</h1>
        </Link>
        <button
          onClick={() => setMenuActivo(!menuActivo)}
          className="menu-header-boton"
          name="boton-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="enlaces-header">
          <Link activeClassName="enlace-activo" className="enlace" to="/">Inicio</Link>
          <Link className="enlace" to="/acerca">Acerca de mi</Link>
          <Link className="enlace" to="/portafolio">Portafolio</Link>
        </div>

      </div>
      <div className={menuActivo ? "menu-enlaces activo" : "menu-enlaces"}>
        <Link className="enlace" to="/">Inicio</Link>
        <Link className="enlace" to="/acerca">Acerca de mi</Link>
        <Link className="enlace" to="/portafolio">Portafolio</Link>
      </div>
    </header>
  )
}

export default Header
