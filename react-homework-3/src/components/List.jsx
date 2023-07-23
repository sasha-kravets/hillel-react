import { useEffect, useState } from "react";

const List = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch(
          "https://64bcfc352320b36433c74e1b.mockapi.io/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading ...</h1>}
      <ul>
        {users.length > 0 &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default List;
