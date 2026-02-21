function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="posts-empty">No posts yet</p>;
  }

  return (
    <div className="posts">
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
