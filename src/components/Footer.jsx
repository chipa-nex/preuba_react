const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
