import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments } from '../services/api';
import PostDetail from '../components/PostDetail';
import CommentList from '../components/CommentList';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [postRes, commentsRes] = await Promise.all([fetchPost(id), fetchComments(id)]);
      setPost(postRes.data);
      setComments(commentsRes.data);
    };
    loadData();
  }, [id]);

  if (!post) return <div>Cargando publicación...</div>;

  return (
    <div className="container headboard">
      <div className="d-flex justify-content-end">
        <Link className="btn btn-outline-primary mb-2" to="/">← Atrás</Link>
      </div>
      <PostDetail post={post} />
      <div className="mt-4">
        <CommentList comments={comments} />
      </div>
    </div>
  );

};

export default PostPage;
