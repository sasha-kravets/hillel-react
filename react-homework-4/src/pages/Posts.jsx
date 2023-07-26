import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setPosts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading ...</h3>}
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link className="post-title" to={`/posts/${post.id}`}>{post.title}</Link>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
