import useFetch from "../hooks/useFetch";

const Users = () => {
  const [data, error, isLoading, refetch] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1>Users</h1>
      {error && <h2>{error}</h2>}
      {isLoading && <h1>Loading ...</h1>}
      <ul>
        {data.length > 0 && data.map((u) => <li key={u.id}>{u.name}</li>)}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Users;
