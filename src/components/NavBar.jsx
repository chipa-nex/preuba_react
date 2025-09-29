import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">🫡</NavLink>

        {/* Botón hamburguesa para dispositivos mas peques*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">Publicaciones</NavLink>
            <NavLink className="nav-link" to="/acerca">Acerca de</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
