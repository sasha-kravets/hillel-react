import useFetch from "../hooks/useFetch";

const Home = () => {
  const [data, error, isLoading, refetch] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  );

  return (
    <div>
      <h1>Home</h1>
      {error && <h2>{error}</h2>}
      {isLoading && <h1>Loading ...</h1>}
      <ul>
        {data.length > 0 && data.map((u) => <img key={u.id} src={u.thumbnailUrl} alt={u.title} />)}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Home;
