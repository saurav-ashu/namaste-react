import { useState } from "react";
import { useEffect } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //why can't async ()=> {} be used here
    console.log("use effect");

    const timer = setInterval(() => {
      console.log("set interval called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("use effect's return");
    };
  }, []);

  const { name } = props;
  return (
    <div className="users">
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count Clicker
        </button>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Bengaluru</h3>
        <h4>Contact: 753498724</h4>
      </div>
    </div>
  );
};

export default User;
