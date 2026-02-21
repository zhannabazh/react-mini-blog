import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div>
      <h1>Forms in React + POST</h1>

      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
