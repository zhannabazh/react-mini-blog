import PostCard from "./PostCard";

function PostList({ posts, onDelete }) {
  if (posts.length === 0) {
    return <p className="posts-empty">No posts yet</p>;
  }

  return (
    <div className="posts">
      <h3>Posts</h3>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;
