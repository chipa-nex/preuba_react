const CommentList = ({ comments }) => {
  return (
    <div>
      <h4>Comentarios:</h4>
      {comments.map(comment => (
      <div className="card mb-3 border-0 border-bottom">
        <div className="card-body d-flex">
          
          {/* Avatar */}
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
            style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}
            title="Usuario">
            <i className="bi bi-person-circle"></i>
          </div>


          {/* Contenido */}
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <div>
                <strong>{comment.name}</strong>
                <small className="text-muted ms-1">{comment.email}</small>
              </div>
              <i className="bi bi-three-dots text-muted"></i>
            </div>

            <p className="mb-2">{comment.body}</p>

            {/* Reactions */}
            <div className="d-flex text-muted small gap-4">
              <div><i className="bi bi-chat me-1"></i>{Math.floor(Math.random() * 10) + 5}</div>
              <div><i className="bi bi-arrow-repeat me-1"></i>{Math.floor(Math.random() * 10) + 5}</div>
              <div><i className="bi bi-heart me-1"></i> {Math.floor(Math.random() * 10) + 5}</div>
            </div>
          </div>
        </div>
      </div>

      ))}
    </div>
  );
};

export default CommentList;
