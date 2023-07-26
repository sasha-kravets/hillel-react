import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setPost(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [postId]);

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading ...</h2>}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
