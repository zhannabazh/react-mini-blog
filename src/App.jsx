import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Forms in React + POST</h1>

      <PostForm onAddPost={addPost} />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostList posts={filteredPosts} onDelete={deletePost} />
    </div>
  );
}

export default App;
