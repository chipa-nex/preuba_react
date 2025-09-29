const PostDetail = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-body d-flex">
        {/* Avatar grande */}
        <div
          className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-4"
          style={{ width: '64px', height: '64px', fontSize: '2rem' }}
          title="Autor"
        >
          <i className="bi bi-person-circle"></i>
        </div>

        {/* Contenido principal */}
        <div className="w-100">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-text">{post.body}</p>
          {/* Puedes agregar aquí info extra como fecha o autor */}
          <small className="text-muted">Editado hace 1 año</small>
            
          {/* Reactions */}
          <div className="d-flex text-muted small gap-4 justify-content-center">
            <div><i className="bi bi-chat me-1 "></i>{Math.floor(Math.random() * 100) + 1}</div>
            <div><i className="bi bi-arrow-repeat me-1 "></i> {Math.floor(Math.random() * 100) + 1}</div>
            <div><i className="bi bi-heart me-1 "></i> {Math.floor(Math.random() * 100) + 1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
