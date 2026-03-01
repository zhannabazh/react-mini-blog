import React, { useState } from "react";

const PostCard = React.memo(function PostCard({ post, onDelete }) {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div
      className="post-card"
      style={{ backgroundColor: highlighted ? "#e82c2cd6" : "#5f3a49" }}
    >
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button
        onClick={() => {
          onDelete(post.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setHighlighted((prev) => !prev);
        }}
      >
        Highlight
      </button>
    </div>
  );
});

export default PostCard;
