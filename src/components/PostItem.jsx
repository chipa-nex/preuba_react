// Este son los contenedores, osea, los CARDs
import '../styles/styles.css'

const PostItem = ({ post}) => {
  return (
    <div className="card post-card">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <button className="btn btn-success">Ver Detalles</button>
    </div>
  );
};
export default PostItem;
