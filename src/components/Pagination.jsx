const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav aria-label="Paginación" className="mt-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            aria-label="Anterior"
          >
            Anterior
          </button>
        </li>

        <li className="page-item disabled">
          <span className="page-link"> {currentPage} / {totalPages} </span>
        </li>

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            aria-label="Siguiente"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
