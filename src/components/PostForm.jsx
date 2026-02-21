import React, { useEffect, useState } from "react";
import { createPost } from "../services/api";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newTitleError = "";
    let newBodyError = "";

    if (!title.trim()) {
      newTitleError = "Title is required";
    } else if (title.trim().length < 3) {
      newTitleError = "Title requires at least 3 symbols";
    }

    if (!body.trim()) {
      newBodyError = "Content is required";
    } else if (body.trim().length < 8) {
      newBodyError = "Content requires at least 8 symbols";
    }

    setTitleError(newTitleError);
    setBodyError(newBodyError);

    if (newTitleError || newBodyError) {
      return;
    }

    setError(null);
    setLoading(true);
    setSuccess(false);

    try {
      const newPost = await createPost({
        title: title.trim(),
        body: body.trim(),
      });

      onAddPost(newPost);

      setSuccess(true);

      setTitle("");
      setBody("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Create Post</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError("");
          }}
        />
        {titleError && <p className="error">{titleError}</p>}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Post content"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            setBodyError("");
          }}
        />
        {bodyError && <p className="error">{bodyError}</p>}
      </div>
      {error && <p className="error global-error">{error}</p>}
      {success && <p className="success">Post created successfully!</p>}

      <button type="submit" disabled={loading || !title.trim() || !body.trim()}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

export default PostForm;
