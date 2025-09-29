import PostItem from './PostItem';

const PostList = ({ posts, onSelectPost }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map(post => (
          <div
            key={post.id}
            className="col-12 col-sm-6 col-md-4 mt-4"
            onClick={() => onSelectPost(post.id)}
            style={{ cursor: 'pointer' }}
          >
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
