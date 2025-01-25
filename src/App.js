import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState("null");

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    
    getData();
  }, []);
  
  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
