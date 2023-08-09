import { createContext } from "react";
import Home from "./componetns/Home";
import "./App.css";

export const Context = createContext(null);

function App() {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ];

  return (
    <div className="App">
      <Context.Provider value={{items: users}}>
        <Home />
      </Context.Provider>
    </div>
  );
}

export default App;
