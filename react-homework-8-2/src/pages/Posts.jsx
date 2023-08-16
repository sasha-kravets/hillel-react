import useFetch from "../hooks/useFetch";

const Home = () => {
  const [data, error, isLoading, refetch] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h1>Posts</h1>
      {error && <h2>{error}</h2>}
      {isLoading && <h1>Loading ...</h1>}
      <ul>
        {data.length > 0 && data.map((u) => <li key={u.id}>{u.title}</li>)}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Home;
