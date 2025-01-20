import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("null");

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Name</h1>
      <img src="null" alt="" />
      <p>Mail</p>
      <button onClick={getData}>Click</button>
    </div>
  );
}

export default App;
