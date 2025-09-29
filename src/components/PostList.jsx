import PostItem from './PostItem';

const PostList = ({ posts, onSelectPost }) => {
  return (
    <div className="container row mt-4">
      {posts.map(post => (
        <div key={post.id} style={{ border: 'none'}} className="col-4 mt-4" onClick={() => onSelectPost(post.id)}>
          <PostItem post={post} onClick={() => onSelectPost(post.id)} />
        </div>
      ))}
    </div>
  );
};


export default PostList;